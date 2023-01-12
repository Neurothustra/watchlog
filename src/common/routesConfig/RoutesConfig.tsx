import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMovie from '../../components/addMovie/AddMovie';
import Home from '../../components/home/home';
import Profile from '../../components/profile/Profile';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home />} />
			<Route path='/addMovie' element={<AddMovie />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/' element={<Home />} />
		</Routes>
	);
};

export default RoutesConfig;
