import { createSlice } from "@reduxjs/toolkit";
import { GetUsers } from "../actions";

const initialState = {
    users : [],
    loading : true,
    success : false,
    errors : []
}

export const UsersGet = createSlice({
    name : "usersget",
    initialState,
    extraReducers : {
        [GetUsers.pending] : (state) => {
            state.loading = true
            state.success = false
        },
        [GetUsers.fulfilled] : (state,action) => {
            state.loading = false
            state.success = true
            state.users = [...action.payload]
        },
        [GetUsers.rejected] : (state,action) => {
            state.loading = false;
            state.success = false;
            state.errors = [...state.errors,...action.payload]
        }
    }
})