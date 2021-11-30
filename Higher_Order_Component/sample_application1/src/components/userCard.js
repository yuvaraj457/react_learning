import React from 'react'

export default function UserCard({user}) {
    return (
        <div style={{border: '1px solid black', marginTop:'10px', paddingLeft:'10px'}}>
                <p><b>User : </b>{user.name}</p>
                <p><b>Email : </b>{user.email}</p>
                <p><b>Contact : </b>{user.phone}</p>
        </div>
    )
}
