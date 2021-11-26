import {  Route,Routes, Navigate } from 'react-router-dom';
import About from '../components/about';

import Login from '../components/login';
import { getAuthToken } from '../shared/sessionStorage';


const ProtectedRoute = ({children}) => {
    return (
        
            getAuthToken() ?
                children
                : <Navigate to="/" />
    );
};

export const AppRouter = () => {
    return (
        <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>} />
        </Routes>
    )}