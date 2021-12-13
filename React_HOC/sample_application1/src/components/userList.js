import React from 'react'

export default function UserList({userData}) {
    return (
        <div>
            <h2>Employee List</h2>
            <ol>
                {userData.length > 0 && userData.map((item, index) => <li key={index}>{item.name}</li>)}
            </ol>
        </div>
    )
}
