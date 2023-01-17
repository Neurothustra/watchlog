import React, { useState } from 'react';
import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../common/services/Firestore';

const Register: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = async (e: any) => {
		e.preventDefault();

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log('\n////////////////////////////////user\n', user);

				navigate('/login');
			})
			.catch((error: any) => {
				const code = error.code;
				const message = error.message;
				console.log(`${code} ${message}`);
			});
	};

	return (
		<main>
			<section>
				<div>
					<div>
						<form>
							<div>
								<label htmlFor='email-address'>Email address</label>
								<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email address' />
							</div>

							<div>
								<label htmlFor='password'>Password</label>
								<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password' />
							</div>

							<button type='submit' onClick={onSubmit}>
								Register
							</button>
						</form>

						<p>
							Already have an account? <NavLink to='/login'>Sign in</NavLink>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Register;
