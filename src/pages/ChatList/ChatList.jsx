import React, { useEffect } from 'react'
import { UserChats } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { ChatListStyle } from './style';
import { Heading, Paragraph } from '../../components/';
import { NavLink, useNavigate } from 'react-router-dom';

export const ChatList = () => {
  const navigate = useNavigate();
  const { chatlist, loading, success } = useSelector(state => state.chatReducer);
  const { users } = useSelector(state => state.UsersGetReducer)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserChats.ChattingList(localStorage.getItem('userid')))
  }, [])

  // const List = chatlist.reduce((a, c) => { !a.find(v => v.id === c.id) && a.push(c); return a; }, []);
  // const List = chatlist.filter((item, index, self) =>
  //   index === self.findIndex((t) => (
  //     t.recieverName == item.recieverName
  //   ))
  // )

  console.log("data", chatlist)
  const Name = chatlist.map(name => name.recieverName)
  const List = chatlist.filter(({ recieverName }, index) => !Name.includes(recieverName, index + 1))

  console.log("List", List)

  const arr = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 1, name: 'one' }]

  const ids = chatlist.map(o => o.recieverName)
  const filtered = chatlist.filter(({ recieverName }, index) => !ids.includes(recieverName, index + 1))

  console.log(filtered)

  return (
    <>
      <ChatListStyle>
        <div className='list'>
          {
            List.map((list, index) => {
              // <div onClick={() => navigate(`/inbox/${list.recieverId}`)} className='chat'>
              return List.length > 1 ?
                list.senderName == localStorage.getItem('username') && <div onClick={() => navigate(`/inbox/${list.recieverId == localStorage.getItem('userid') ? list.senderId : list.recieverId}`)} className='chat'>
                  <div>
                    <p className='icon'> {list.recieverName == localStorage.getItem('username') ? list.senderName[0].toUpperCase() : list.recieverName[0].toUpperCase()} </p>
                  </div>
                  <div>
                    <Heading
                      HeadingText={list.recieverName}
                      // HeadingText={list.recieverName == localStorage.getItem('username') ? list.senderName : list.recieverName}
                      size={"18px"}
                      transform={"capitalize"}
                      lineHeight={"20px"}
                    />
                    <Paragraph
                      ParagraphText={`${chatlist[chatlist.length - 1].body}`}
                      lineHeight={"20px"}
                    />
                  </div>
                </div>
                :
                <div onClick={() => navigate(`/inbox/${list.recieverId == localStorage.getItem('userid') ? list.senderId : list.recieverId}`)} className='chat'>
                  <div>
                    <p className='icon'> {list.recieverName == localStorage.getItem('username') ? list.senderName[0].toUpperCase() : list.recieverName[0].toUpperCase()} </p>
                  </div>
                  <div>
                    <Heading
                      // HeadingText={list.recieverName}
                      HeadingText={list.recieverName == localStorage.getItem('username') ? list.senderName : list.recieverName}
                      size={"18px"}
                      transform={"capitalize"}
                      lineHeight={"20px"}
                    />
                    <Paragraph
                      ParagraphText={`${chatlist[chatlist.length - 1].body}`}
                      lineHeight={"20px"}
                    />
                  </div>
                </div>
            })
          }
        </div>
      </ChatListStyle>
    </>
  )
}