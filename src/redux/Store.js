import { configureStore } from "@reduxjs/toolkit";
import { userReducer, loginReducer, chatReducer, createChatReducer, userChatListReducer, UsersGetReducer } from "./reducers";

const store = configureStore({
    reducer: {
        userReducer,
        loginReducer,
        chatReducer,
        createChat: createChatReducer,
        userChats: userChatListReducer,
        UsersGetReducer
    }
})

export default store;