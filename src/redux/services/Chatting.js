import { privateUrl } from "../config/api.config";

const END_POINT = "/chat"

const createChat = (data) => {
    return privateUrl.post(END_POINT, data)
}

const ChattingList = (id) => {
    return privateUrl.get(`${END_POINT}/${id}`);
}

const usersChatting = (recieverId) => {
    return privateUrl.get(`${END_POINT}/list/${recieverId}`)
}

export const Chats = {
    createChat,
    ChattingList,
    usersChatting
}