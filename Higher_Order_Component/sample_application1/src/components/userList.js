import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './userCard'

export default function UserList({searchTerm}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => setUsers(data))
    },[])

    const userList = filterUsers(searchTerm, users)
    
    return (
        <> 
            { userList.map((user, index) => <UserCard user={user}/>)}
        </>
    )
}

const filterUsers = (search, users) => {
    const searchTerm = search.toUpperCase()
    return users.filter(user => {
        const str = user.name.toUpperCase()
        return str.indexOf(searchTerm) >= 0
    })
}