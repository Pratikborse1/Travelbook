import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ThankYou from '../pages/ThankYou';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResult from './../pages/SearchResult';
import Tours from './../pages/Tours';
import ToursDetails from './../pages/ToursDetails';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='/tours'  element={<Tours/>}></Route>
        <Route path='/tours/:id'  element={<ToursDetails/>}></Route>
        <Route path='/login'  element={<Login/>}></Route>
        <Route path='/register'  element={<Register/>}></Route>
        <Route path='/thank-you'  element={<ThankYou/>}></Route>
        <Route path='/tours/search'  element={<SearchResult/>}></Route>
    </Routes>
  )
}

export default Routers