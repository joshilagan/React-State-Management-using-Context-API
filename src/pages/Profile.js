import React from 'react'
import ChangeProfile from '../component/ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../App'

const Profile = () => {
  const { username } = useContext(AppContext)
  return (
    <div>
      Profile Page, Content is: {username} State Management
      <ChangeProfile/>
      </div>
  )
}

export default Profile