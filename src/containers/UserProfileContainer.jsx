import React, {} from 'react'
import UserProfile from "../components/user/UserProfile"
export default function UserProfileContainer({requestingUser, user}) {

  return (
        <div>
            {requestingUser ? "Loading" : <UserProfile user={user} />}
        </div>
  )
}
