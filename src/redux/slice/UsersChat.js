import { createSlice } from "@reduxjs/toolkit";
import { usersChatting } from "../actions";

const initialState = {
    chats: [],
    recieverName: "",
    loading: true,
    success: false,
    errors: []
}

export const userChats = createSlice({
    name: "userschat",
    initialState,
    extraReducers: {
        [usersChatting.pending]: (state, action) => {
            state.loading = true;
            state.success = false;
        },
        [usersChatting.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.chats = [...action.payload]
        },
        [usersChatting.rejected]: (state, action) => {
            state.loading = false;
            state.success = false;
            state.errors = [...state.errors, ...action.payload]
        }
    }
})