import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../component.js/home'

import LoginContainer from '../containers/loginContainer'
import { getAuthToken } from '../shared/authToken'

const PrivateRoutes = ({children}) => {
    return(
        getAuthToken() ? children : <Navigate to='/login'/>
    )
}

export default function AppRouter() {
    return (
            <Routes>
                <Route path='/login' element={<LoginContainer/>}/>
                <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            </Routes>
    )
}
