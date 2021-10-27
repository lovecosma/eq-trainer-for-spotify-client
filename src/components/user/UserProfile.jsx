import React from 'react'

export default function UserProfile({user}) {
    return (
        <div>
            <h1>Hello, {user.display_name}</h1>
        </div>
    )
}
