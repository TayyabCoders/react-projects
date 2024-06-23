import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const Profile = () => {
    const {user}:any = useContext(UserContext)
    
  if(!user) return <div>plz Login</div>

  return <div>Welcome {user.username}</div>
}

export default Profile