import React, { useContext } from 'react';
import { UserContext } from '../../common/firebase/UserProvider';
import './Profile.css';

const Profile: React.FC = () => {
	const userContext = useContext(UserContext);

	return (
		<>
			<h1>Profile</h1>
			<p>{userContext.user.displayName}</p>
		</>
	);
};

export default Profile;
