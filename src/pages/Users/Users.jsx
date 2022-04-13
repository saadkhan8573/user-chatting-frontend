import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../../redux/actions';
import { Heading } from '../../components';
import { UsersStyle } from './style';
import { useNavigate } from 'react-router-dom';

export const Users = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { users, loading, success, errors } = useSelector(state => state.UsersGetReducer)

  const token = localStorage.getItem('login')
  console.log("Tokennn",token);
  useEffect(() => {
    dispatch(UserActions.GetUsers(token))
  }, [])

  console.log("users", users)

  const handleClick = (id) => {
    navigate(`/inbox/${id}`)
  }

  return (
    <UsersStyle>
      {
        users.map(user => (
          <div onClick={() => handleClick(user._id)} className='users' key={user._id}>
            <p className='avatar'> {user.name[0].toUpperCase()} </p>
            <Heading
              HeadingText={user.name}
              transform={"capitalize"}
              size={"35px"}
            />
          </div>
        ))
      }
    </UsersStyle>
  )
}