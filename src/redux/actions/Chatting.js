import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chats } from "../services";

export const CreateChat = createAsyncThunk(
    "user/createchat",
    async (data) => {
        const res = await Chats.createChat(data);
        return res.data;
    }
)

export const ChattingList = createAsyncThunk(
    "user/chatlist",
    async (id) => {
        const res = await Chats.ChattingList(id);
        console.log("res",res.data)
        return res.data;
    }
)

export const usersChatting = createAsyncThunk(
    "user/userschatting",
    async (recieverId) => {
        const res = await Chats.usersChatting(recieverId)
        return res.data
    }
)

export const UserChats = {
    CreateChat,
    ChattingList,
    usersChatting
}