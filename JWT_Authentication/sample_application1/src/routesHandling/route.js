import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from '../components/about'
import Login from '../components/login'
import {Home} from '../components/home'
import { getToken } from '../shared/authToken'

const ProtectedRoute = ({children}) => {
    return (
        
            getToken() ?
                children
                : <Navigate to="/login" />
    );
};

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
                <Route path='login' element={<Login/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
