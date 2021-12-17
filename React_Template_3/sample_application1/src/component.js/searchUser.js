import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

import { fetchUser, search } from '../action/userAction'
import UserCard from './userCard'

export default function SearchUser() {
    const [searchInput , setSearch] = useState('')
    const dispatch = useDispatch()
    const userData = useSelector(state => state.userData)
    const s_word = useSelector(state => state.searchTerm)

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])

    const flatProps = {
        options : userData.length > 0 ? userData.map(item => item.name ) : ['']
    }

    return (
        <div>
             <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
           <Autocomplete
                {...flatProps}
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                onChange={(e, value )=> value != null && setSearch(value)}
                renderInput={(params) => <TextField {...params} label="Users" />}
            />
            <Button variant="outlined" onClick={() => dispatch(search(searchInput))}>get details</Button>
      </Box>
      {s_word && <UserCard searchTerm={s_word} userData={userData}/>}
        </div>
    )
}
