import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { InputField, Paragraph } from '../../components';
import { UserActions, UserChats } from '../../redux/actions';
import { ChatDetailsStyle } from './style';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { io } from 'socket.io-client';

export const ChatDetails = () => {
  const socket = useRef()
  const [message, setMessage] = useState("")
  const [userId, setUserId] = useState(localStorage.getItem("userid"))
  const { id } = useParams();
  const { chats, recieverName, loading, success, errors } = useSelector(state => state.userChats);
  const { users } = useSelector(state => state.UsersGetReducer)
  const User = users.find(user => user._id == id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserChats.usersChatting(id))
  }, [id, dispatch, UserChats])

  useEffect(() => {
    socket.current = io("ws://localhost:8900")
    socket.current.on("getMessage",data => {
      console.log("getMessage",data)
    })
  }, [])


  useEffect(() => {
    socket.current.emit("addUser", userId)
    socket.current.on("getUsers", userrr => {
      console.log("userrrsss", userrr)
    })
  }, [userId])  


  const initialValues = {
    message: "",
  }

  console.log(initialValues)

  const validationSchema = yup.object({
    message: yup.string().required("Message is required")
  })

  const onSubmit = (values) => {
    console.log(socket.current.emit)

    socket.curent.emit("sendmessage", {
      senderId: userId,
      recieverId: id,
      message : "Saad khan"
    })

    const data = {
      message: values.message,
      recieverId: id,
      recieverName: User.name
    }
    dispatch(UserChats.CreateChat(data))
  }
  return (
    <ChatDetailsStyle>
      <div className='details'>
        {
          chats && chats.map(chat => (
            <React.Fragment key={chat._id}>
              <Paragraph
                ParagraphText={`${chat.senderName} : ${chat.body}`}
                alignment={chat.senderName == localStorage.getItem('username') ? 'right' : 'left'}
              />
            </React.Fragment>
          ))
        }
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {
            (props) => {
              console.log(props)
              return <Form>
                {setMessage(props.values.message)}
                <InputField
                  name={"message"}
                  placeholder={"Enter Your Message"}
                />
              </Form>
            }
          }
        </Formik>
      </div>
    </ChatDetailsStyle>
  )
}