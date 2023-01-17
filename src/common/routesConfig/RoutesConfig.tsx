import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMovie from '../../components/addMovie/AddMovie';
import Home from '../../components/home/home';
import Login from '../../components/login/Login';
import Profile from '../../components/profile/Profile';
import Register from '../../components/register/Register';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />} />
			<Route path='/addMovie' element={<AddMovie />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
			<Route path='/' element={<Home />} />
		</Routes>
	);
};

export default RoutesConfig;
