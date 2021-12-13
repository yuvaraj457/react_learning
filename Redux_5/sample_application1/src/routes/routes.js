import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../components/about'
import Home from '../components/home'
import Login from '../components/login'
import { Todos } from '../components/todos'
import { getAuthToken } from '../shared/authToken'

const PrivateRoutes = ({children}) => {
    return(
        getAuthToken() ? children : <Navigate to='/login'/>
    )
}

export default function AppRouter() {
    return (
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
                <Route path='/about' element={<PrivateRoutes><About/></PrivateRoutes>}/>
                <Route path='/todos' element={<PrivateRoutes><Todos/></PrivateRoutes>} />
            </Routes>
    )
}
