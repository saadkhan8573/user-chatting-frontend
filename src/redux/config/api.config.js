import axios from "axios";

export const publicUrl = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: {
        "Content-type": "application/json",
    },
});

const token = localStorage.getItem("login");
console.log("Config token",token)

export const privateUrl = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: { token: `Bearer ${token}` },
});