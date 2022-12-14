import React, { useEffect, useState } from 'react'
import './App.css';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import Catalog from './Catalog.js'
import SearchLine from './SearchLine';
import Cart from './Cart.js'
import UserForm from './UserForm.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { check } from './http/userAPI';
import { userSet } from './userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user)

  useEffect(()=>{
    check().then(data => {
      dispatch(userSet(data))
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
          <AppHeader />
          <SearchLine />
          <div className='CatalogContainer'>
            <Catalog />
          </div>
          <AppFooter/>
        </>} />
        <Route path='/cart' element={
          <>
            <AppHeader />
            <Cart/>
            <AppFooter />
          </>
        }/>
        <Route />
        <Route path='/login' element={
          <>
            <AppHeader />
            <UserForm />
            <AppFooter />
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
