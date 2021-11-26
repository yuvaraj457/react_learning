import React, {  useState } from 'react'
import { Link, useLinkClickHandler } from 'react-router-dom'

import {user, userVerify} from '../core/apiCalls'
import { clearAuthToken, getAuthToken, setAuthToken } from '../shared/sessionStorage'

export default function Login() {
    const [logged, setlogin] = useState(false)
    const handler = () => {
        user('User')
        .then(({data}) =>{ 
            setAuthToken(data.token)
        })
        .catch((error) => console.log(error))
        if(userVerify()){
            setlogin(true)
        }
    }
    return (
        <div>
            {
                logged?<button onClick={() => {clearAuthToken(); setlogin(false)}}>LogOut</button>:
                <button onClick={() => handler()}>Login</button>
            }
            {logged && <p>Login Successfull</p>}
            <Link to='/about' style={{ display: "block", margin: "4px"}}>About</Link>
        </div>
    )
}
