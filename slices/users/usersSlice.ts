import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getUsersThunk = createAsyncThunk(
  "get/users",
  async ({ page = 2, limit = 5 }:{page?:number,limit?:number}) => 
    {
        try{
        const skip = (page - 1) * limit;
        const response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
        );
        const data=await response.json();
        
        let status:("pending"|"paid"|"failed")="failed";
        const updatedData=data.users.map((user)=>{
            if(user.age > 20 && user.age <25){
                status="paid";
            }else if (user.age >= 25 && user.age <= 35){
                status="pending";
            }else if(user.age>35){
                status="failed";
            }
            return {
                ...user,status:status,
            }
        })
        return updatedData;

        }catch(error){
            return null;
        }
    },
);

const userSlice=createSlice({
    name:"users",
    initialState:{
        allUsers:[],
        allFilteredUsers:[],
        isLoading:false,
    },
    reducers:{
        handleFilter:(currentState,action)=>{
            console.log(action.payload);
            
            
            const {searchVal,selectVal}=action.payload;
            let updatedUsers=currentState.allFilteredUsers;
            if (selectVal.toLowerCase() === "all statuses" && searchVal==""){
                currentState.allFilteredUsers = currentState.allUsers;
                return;
            }
            

            if(selectVal.toLowerCase() !== "all statuses"){
                updatedUsers=currentState.allUsers.filter(user=>{
                    return user.status.toLowerCase() === selectVal.toLowerCase();
                })
            }

            if (searchVal !== "") {
            updatedUsers = updatedUsers.filter((user) => {
              return user.username.toLowerCase().startsWith(searchVal.toLowerCase());
            });
            }


            currentState.allFilteredUsers=updatedUsers;
        }
    },
    extraReducers(builder){
        builder.addCase(getUsersThunk.pending,(currentState,action)=>{
            currentState.isLoading=true;
        }).addCase(getUsersThunk.fulfilled,(currentState,action)=>{
            if(action.payload){
                currentState.isLoading=false;
                currentState.allUsers=action.payload;
                currentState.allFilteredUsers=action.payload;
            } 
        }).addCase(getUsersThunk.rejected,(currentState,action)=>{
            currentState.isLoading=false;
        })
    }
})
export const {handleFilter} = userSlice.actions;
export default userSlice.reducer;