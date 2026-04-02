import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        logIn : (state,action)=>{
            state.status = true;
            action.userData = action.payload.userData;
        },
        logout : (state)=>{
            state.status = false;
            state.userData = null;

        }
    }
})

export const { logIn, logout } = authSlice.actions;

export default authSlice.reducer;