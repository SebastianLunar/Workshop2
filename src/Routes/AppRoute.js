import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../components/Detail';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;