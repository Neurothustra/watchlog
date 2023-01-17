import React from 'react';
import './Nav.css';

const Nav: React.FC = () => {
	return (
		<div className='nav'>
			<div className='nav-item'>
				<a href='/home'>Home</a>
			</div>
			<div className='nav-item'>
				<a href='/addmovie'>Add Movie</a>
			</div>
			<div className='nav-item'>
				{<a href='profile'>Profile</a>}
			</div>
		</div>
	);
};

export default Nav;
