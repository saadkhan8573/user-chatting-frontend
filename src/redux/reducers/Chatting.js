import { chatSlice, createChatSlice, userChats } from "../slice";

export const chatReducer = chatSlice.reducer;

export const createChatReducer = createChatSlice.reducer

export const userChatListReducer = userChats.reducer;