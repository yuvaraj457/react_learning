import React, { useState } from 'react'
import { login, logout } from '../core/apiCalls'
import { clearAuthToken, getAuthToken, setAuthToken } from '../shared/sessionStorage'

export default function Login() {
    const [logged, setLogin] = useState(false)
    
    const handler = () => {
        if(!logged)
        {
            login()
            .then(({token}) => {
                // setAuthToken(token)
                setLogin(true)
            })
        }
        else{
            logout()
            setLogin(false)
        }

    }
    return (
        <div>
            <button onClick={() => handler()}>{logged?<p>Logout</p>:<p>Login</p>}</button>
            {logged && <p>Login Successfull</p>}
        </div>
    )
}
