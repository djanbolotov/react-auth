import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import Users from './pages/users/Users';
import { GetAllUsers, GetMe } from './store/action';

function App() {
  const dispatch = useDispatch();
  const loginSuccess = useSelector(state => state.data.login.success);
  const getSuccess = useSelector(state => state.data.get.success);

  useEffect(() => {
    dispatch(GetMe());
    dispatch(GetAllUsers());
  }, [loginSuccess]);

  return (
      <BrowserRouter basename='react-auth'>
        <Routes>
          <Route exact path='/' element={ (loginSuccess || getSuccess)? <Users/> : <Navigate to='/login'/>}/>
          <Route exact path='/login' element={ (!loginSuccess && !getSuccess)? <Login/> : <Navigate to='/'/>}/>
          <Route exact path='/registration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
