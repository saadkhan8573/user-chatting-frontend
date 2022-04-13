import { createSlice } from "@reduxjs/toolkit";
import { UserActions } from '../actions';

const initialState = {
    user: {},
    loading: true,
    hasError: false,
    errors: [],
    success: false,
}

export const userSlice = createSlice({
    name: "register",
    initialState,
    extraReducers: {
        [UserActions.RegisterUser.pending]: (state, action) => {
            state.loading = true
        },
        [UserActions.RegisterUser.fulfilled]: (state, action) => {
            state.user = { ...action.payload }
            state.loading = false
            state.success = true
        },
        [UserActions.RegisterUser.rejected]: (state, action) => {
            state.loading = false
            state.success = false
            state.errors = [...state.errors, ...action.payload]
        }
    }
})

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: {
        [UserActions.LoginUser.pending]: (state, action) => {
            state.loading = true
        },
        [UserActions.LoginUser.fulfilled]: (state, action) => {
            state.user = { ...action.payload }
            state.loading = false
            state.success = true
        },
        [UserActions.LoginUser.rejected]: (state, action) => {
            state.loading = false
            state.success = false
            state.errors = [...state.errors, ...action.payload]
        }
    }
})