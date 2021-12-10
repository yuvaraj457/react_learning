import React, { useState } from 'react'
import { login, logout } from '../core/apiCalls'
import { getToken } from '../shared/authToken'
import NavBar from '../shared/navBar'

export default function Login() {
    const [logged, setLogin] = useState(false)
    
    const handler = () => {
        if(!logged)
        {
            login()
            .then(() => {
                setLogin(true)
            })
            .catch((error) => console.log(error))
        }
        else{
            logout()
            setLogin(false)
        }

    }
    return (
        <div>
            <NavBar/>
            <button onClick={() => handler()}>{getToken() ?<p>Logout</p>:<p>Login</p>}</button>
            {logged && <p>Login Successfull</p>}
        </div>
    )
}
