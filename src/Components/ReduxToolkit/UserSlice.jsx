import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
addUser(state,action){
state.push(action.payload)
},
removeUser(state,action){
    state.splice(action.payload,1)
},
deleteAllUsers(state,action){
    return state=[]
}

    }
})

export const{addUser,removeUser,deleteAllUsers}=userSlice.actions;
export default userSlice.reducer