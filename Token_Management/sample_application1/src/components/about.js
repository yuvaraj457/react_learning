import React from 'react'
import { Link } from 'react-router-dom'
import { userVerify } from '../core/apiCalls'

export default function About() {
    return (
        <div>
            <Link to='/'>Home</Link>
            {userVerify() && <p>About Page</p>}
        </div>
    )
}
