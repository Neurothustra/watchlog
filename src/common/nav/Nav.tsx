import React from 'react';
import './Nav.css';

const Nav: React.FC = () => {
	return (
		<div className='nav'>
			<ul>
				<li>
					<a href='/home'>Home</a>
				</li>
				<li>
					<a href='/addmovie'>Add Movie</a>
				</li>
				<li>
					<a href='profile'>Profile</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
