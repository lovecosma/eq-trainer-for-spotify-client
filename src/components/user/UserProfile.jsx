import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import {UserContext} from "../../UserProvider"

export default function UserProfile() {
    const {id} = useParams()
    const history = useHistory()
    const {user, requesting} = useContext(UserContext)
    useEffect(() => {
        if(user.id !== Number(id)){
            history.push("/")
        }
    }, [])
  return (
      <div>
          {requesting ? <div>Loading</div> : 
          <div>
              <div>
                <div>Hello, {user.display_name}</div>
                {user.playlists ? user.playlists.map(playlist => <h4 key={playlist.id} >{playlist.name}</h4>) : <div></div>}
            </div>
        </div>
        }
      </div>
  )
}
