import React from 'react'
import NavLinks from './NavLinks'

export default function NavBar({user}) {
    return (
        <div>
           <nav>
               <NavLinks user={user} />
            </nav> 
        </div>
    )
}
