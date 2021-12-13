import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { logOut } from '../core/apiCalls'
import { clearAuthToken } from '../shared/authToken'

export default function Home() {
    const logoutHandler = () => {
        logOut()
        .then(() => clearAuthToken())
        .catch(error => console.log(error))
        return <Navigate to='/'/>
    }

    return (
        <div>
            <p>This is home page</p>
            <Link to='/' onClick={() => logoutHandler()}>Logout</Link>{' '}
            <Link to='/about'>About</Link>{' '}
            <Link to='/todos'>Todos</Link>
        </div>
    )
}
