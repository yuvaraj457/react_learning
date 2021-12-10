import React from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../core/apiCalls'
import { getToken } from './authToken'

export default function NavBar() {
    return (
        <nav>
                 <Link to='/login' onClick={getToken() && logout}>{getToken()? 'LogOut' : 'Login'}</Link>
                 <Link to="/about">About</Link> |{" "}
        </nav>
    )
}
