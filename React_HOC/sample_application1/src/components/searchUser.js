import React, { useState } from 'react'

export default function SearchUser({userData}) {
    const [searchTerm, setSearchTerm] = useState('')
    const filterUser = search(searchTerm, userData)

    return (
        <div>
            <input
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='Search Employee Details'
            />
            { searchTerm && filterUser.map((user, index) => 
            <div key={index}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            </div>
            )}
        </div>
    )
}

const search = (searchTerm, userData) => {
    const sTerm = searchTerm.toUpperCase()
    return userData.filter(user => {
        const str = user.name.toUpperCase()
        return str.indexOf(sTerm) >= 0
    })
}
