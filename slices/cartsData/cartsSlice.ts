import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCartsThunk=createAsyncThunk("get/carts",async ()=>{
  const response = await fetch("https://dummyjson.com/carts");
  const data= await response.json();
  return data;
}) 

export const cartsSlice=createSlice({
    name:"carts",
    initialState:{
       carts:[],
       filteredCarts:[],
       isLoading:false,
    },
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(getCartsThunk.pending,(currentState)=>{
            currentState.isLoading=true;
        }).addCase(getCartsThunk.fulfilled,(currentState,action)=>{
            const updatedData=action.payload?.carts;
            currentState.carts=updatedData;
            currentState.isLoading=false;
        }).addCase(getCartsThunk.rejected,(currentState)=>{
            currentState.isLoading=false;
        })
    }
})

export default cartsSlice.reducer;
