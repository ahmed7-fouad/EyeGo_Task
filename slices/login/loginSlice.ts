import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie, getCookie } from "@/lib/cookies";
import { toast } from "@/components/ui/toast";
export const authMeThunk=createAsyncThunk("auth/me",async()=>{
    const token= await getCookie("token");
     if(token){
        try{
            const response = await fetch("https://dummyjson.com/auth/me", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              credentials: "include",
            });
            const data=response.json();

            return data;

        }catch(error){
            return undefined;
        }
    }else{
        return undefined;
    }
 
})
export const loginThunk=createAsyncThunk("user/login",async ({email,password})=>{
    try{
        const response=await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: email,
            password: password,
            expiresInMins: 30,
        }),
        credentials: "include", 
        })

        const result=await response.json();
        if (result.accessToken) {
            await setCookie("token", result.accessToken);
        }
        return result;
        
    }catch(error){
        return error;
    }
})

export const loginSlice=createSlice({
    name:"login",
    initialState:{
        userData:{},
        token:"",
        isLoading:false,
    },
    reducers:{

    },

    extraReducers(builder){
        builder
          .addCase(loginThunk.pending, (currentState, action) => {
            currentState.isLoading = true;
          })
          .addCase(loginThunk.fulfilled, (currentState, action) => {
            const token = action.payload.accessToken;
            currentState.token = token;
            currentState.userData = action.payload;

            if (token) {
              toast.add({
                type: "success",
                title: "Welcome Back",
                description: action.payload.message,
              });
            } else {
              toast.add({
                type: "warning",
                title: "Warning",
                description: action.payload.message,
              });
            }
            currentState.isLoading = false;
          })
          .addCase(loginThunk.rejected, (currentState, action) => {
            currentState.isLoading = false;
            toast.add({
              type: "error",
              title: "Error",
              description: action?.payload?.message,
            });
          })
          .addCase(authMeThunk.pending,(currentState,action)=>{
            currentState.isLoading=true;
          })
          .addCase(authMeThunk.fulfilled,(currentState,action)=>{
            currentState.isLoading=false;
            if(action.payload)
                 currentState.userData=action.payload;
            else{
               toast.add({
                 type: "error",
                 title: "Error",
                 description: "There is currently a problem with the server.",
               }); 
            }
          })
          .addCase(authMeThunk.rejected,(currentState,action)=>{
            currentState.isLoading=false;
          });
    }
})


export default loginSlice.reducer;