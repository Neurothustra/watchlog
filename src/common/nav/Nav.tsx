import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import './Nav.css';

const Nav: React.FC = () => {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const auth = getAuth();

	onAuthStateChanged(auth, (user: any) => {
		if (user) {
			setIsAuthorized(user.uid);
		} else {
			console.log('User is not logged in.');
		}
	});
	return (
		<div className='nav'>
			<div className='nav-item'>
				<a href='/home'>Home</a>
			</div>
			<div className='nav-item'>
				<a href='/addmovie'>Add Movie</a>
			</div>
			<div className='nav-item'>{isAuthorized ? <a href='profile'>Profile</a> : <a href='login'>Log in</a>}</div>
		</div>
	);
};

export default Nav;
