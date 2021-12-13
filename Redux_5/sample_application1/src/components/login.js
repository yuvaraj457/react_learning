import React from 'react'
import { Navigate } from 'react-router-dom'
import { login } from '../core/apiCalls'
import { setAuthToken } from '../shared/authToken'

export default function Login() {
    const handler = () => {
        login()
        .then(response => {setAuthToken(response.token); return<Navigate to='/'/>})
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={() => handler()}>Login</button>
        </div>
    )
}
