import { privateUrl, publicUrl } from '../config/api.config';

const RegisteUser = (user) => {
    return publicUrl.post("/register", user);
}

const LoginUser = (user) => {
    return publicUrl.post("/login", user);
}

const GetUsers = (token) => {
    return privateUrl.get("/users");
}

export const UserData = {
    RegisteUser,
    LoginUser,
    GetUsers
}