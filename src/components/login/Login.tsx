import React, { useContext } from 'react';
import { FirebaseAuth } from '../../common/firebase/FirebaseAuth';
import { UserContext } from '../../common/firebase/UserProvider';
import './Login.css';

const Login: React.FC = () => {
	const { user, logout } = useContext(UserContext);

	return (
		<>
			{user && user.displayName ? (
				<div>
					{user.displayName}
					<button onClick={logout} style={{ paddingLeft: '20px' }}>
						Sign out
					</button>
				</div>
			) : (
				<FirebaseAuth />
			)}
		</>
	);
};

export default Login;
