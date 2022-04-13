import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ChatDetails, ChatList, Login, Register, Users } from './pages';
import { ProtectedRoutes, ProtectedRoutesLoggedinUsers } from './ProtectedRoutes';
import { Navbar } from './components'
import { UserActions } from './redux/actions';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserActions.GetUsers())
  }, [dispatch, UserActions])

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Users />} />
          <Route path="/inbox" element={<ChatList />} />
          <Route path="/inbox/:id" element={<ChatDetails />} />
        </Route>
        <Route element={<ProtectedRoutesLoggedinUsers />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App