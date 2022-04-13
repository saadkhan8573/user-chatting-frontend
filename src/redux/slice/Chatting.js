import { createSlice } from "@reduxjs/toolkit";
import { ChattingList } from "../actions";

const initialState = {
    chatlist: [],
    loading: true,
    hasError: false,
    errors: [],
    success: false,
}

export const chatSlice = createSlice({
    name: "chatlist",
    initialState,
    extraReducers: {
        [ChattingList.pending]: (state, action) => {
            state.loading = true
            state.success = false
        },
        [ChattingList.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.chatlist = [...action.payload.ChatList]
        },
        [ChattingList.rejected]: (state, action) => {
            state.loading = false
            state.success = false
            state.errors = [...state.errors, ...action.payload]
        }
    }
})