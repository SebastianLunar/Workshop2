import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Detail from '../components/Detail';

const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
            </BrowserRouter>
        </div>


    )}