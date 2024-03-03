import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    isLoading: false,
    error: null
 
}

const pending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const rejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signup.pending, pending)
            .addCase(signup.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(signup.rejected, rejected)
    }
})

export default authSlice.reducer