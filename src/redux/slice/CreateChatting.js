import { createSlice } from "@reduxjs/toolkit";
import { CreateChat } from "../actions";

const initialState = {
    message: "",
    loading: true,
    errors: [],
    success: false
}

export const createChatSlice = createSlice({
    name: "createchat",
    initialState,
    extraReducers: {
        [CreateChat.pending]: (state, action) => {
            state.loading = true
            state.success = false
        },
        [CreateChat.fulfilled]: (state, action) => {
            state.loading = false
            state.success = true
            state.message = action.payload.message
        },
        [CreateChat.rejected]: (state, action) => {
            state.loading = false;
            state.success = false;
            state.errors = [...state.errors, ...action.payload]
        }
    }
})