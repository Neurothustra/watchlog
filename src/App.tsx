import React from 'react';
import Nav from './common/nav/Nav';
import RoutesConfig from './common/routesConfig/RoutesConfig';
import './App.css';

const App: React.FC = () => {
	return (
		<>
			<div className='appContainer'>
				<RoutesConfig />
			</div>
			<Nav />
		</>
	);
};

export default App;
