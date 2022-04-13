import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const token = localStorage.getItem('login');
    return token ? <Outlet /> : <Navigate to="/login" />
}

export const ProtectedRoutesLoggedinUsers = () => {
    const token = localStorage.getItem("login");
    return token ? <Navigate to="/" /> : <Outlet />
}