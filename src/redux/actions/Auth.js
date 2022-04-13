import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { UserData } from '../services';

export const RegisterUser = createAsyncThunk(
    "user/register",
    async (user) => {
        const res = await UserData.RegisteUser(user);

        return res.data;
    }
)

export const LoginUser = createAsyncThunk(
    "user/login",
    async (user) => {
        const res = await UserData.LoginUser(user);
        localStorage.setItem('login',res.data.token);
        localStorage.setItem('username',res.data.user.name)
        localStorage.setItem('userid',res.data.user._id)
        return res.data;
    }
)

export const GetUsers = createAsyncThunk(
    "getusers",
    async (token) => {
        const res = await UserData.GetUsers(token);
        return res.data
    }
)

export const UserActions = {
    RegisterUser,
    LoginUser,
    GetUsers
}