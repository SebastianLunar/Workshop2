import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';

const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoute;