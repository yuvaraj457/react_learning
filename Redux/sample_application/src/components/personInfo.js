import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserDataById } from '../action/action'

export default function PersonInfo() {
    const [id, setId] = useState('')
    const dispatch = useDispatch()

    const data = useSelector(state => state)
 
    return (
        <div>
            <h2>Enter person id to search</h2>
            <input onChange={(e) => setId(e.target.value)}/>
            <button onClick={() => dispatch(fetchUserDataById(id))}>Search</button>
            <ul>
                {data && data.userDataById && [data.userDataById].map((item, index) => 
                <>
                <li key={"id"}>Id:{item.id}</li>
                <li key={'name'}>Name : {item.name}</li>
                <li key={'email'}>Email : {item.email}</li>
                </>
                )} 
            </ul>
        </div>
    )
}
