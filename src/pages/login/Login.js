import React, { createRef } from "react";
import "./login.scss";
import logo from "../../assets/logo.jpeg";
import { signInWithEmailAndPassword, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const email = createRef();
	const password = createRef();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email.current.value);
		console.log(password.current.value);
		try {
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			);
			const user = userCredentials.user;
			console.log(user);
			navigate("/", { user });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="login">
			<div className="loginContainer">
				<img src={logo} alt="" />
				<div className="top">
					<h1>Login</h1>
				</div>
				<div className="bottom">
					<form onSubmit={handleSubmit}>
						<div className="input">
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								ref={email}
								required
								autoFocus={true}
							/>
						</div>
						<div className="input">
							<label htmlFor="password">Password:</label>
							<input type="password" id="password" ref={password} required />
						</div>
						<button type="submit">Log In</button>
					</form>
				</div>
			</div>
		</div>
	);
};
