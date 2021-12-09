/* eslint-disable no-shadow */
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

import { NEXT_URL } from '@/config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const router = useRouter();

	// eslint-disable-next-line no-use-before-define
	// useEffect(() => checkUserLoggedIn(), []);

	// Register user
	const register = async user => {
		console.log(`user`, user);
		// const res = await fetch(`${NEXT_URL}/api/register`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(user),
		// });

		// const data = await res.json();

		// if (res.ok) {
		// 	setUser(data.user);
		// 	router.push('/account/dashboard');
		// } else {
		// 	setError(data.message);
		// 	setError(null);
		// }
	};

	// Login user
	const login = async ({ email: identifier, password }) => {
		// console.log(`login`, { identifier, password }); // strapi way
		const res = await fetch(`${NEXT_URL}/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				identifier,
				password,
			}),
		});

		const data = await res.json();
		console.log(`data`, data);
		if (res.ok) {
			setUser(data.user);
			// router.push('/account/dashboard');
		} else {
			setError(data.message);
			setError(null);
		}
	};

	// Logout user
	const logout = async () => {
		console.log(`logout`, logout);
		// 	const res = await fetch(`${NEXT_URL}/api/logout`, {
		// 		method: 'POST',
		// 	});

		// 	if (res.ok) {
		// 		setUser(null);
		// 		router.push('/');
		// 	}
		// };

		// // Check if user is logged in
		// const checkUserLoggedIn = async user => {
		// 	const res = await fetch(`${NEXT_URL}/api/user`);
		// 	const data = await res.json();

		// 	if (res.ok) {
		// 		setUser(data.user);
		// 	} else {
		// 		setUser(null);
		// 	}
	};

	// Should use the useMemo because multiply renders
	// const values = useMemo(() => ({ user, error, register, login, logout }), []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<AuthContext.Provider value={{ user, error, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
