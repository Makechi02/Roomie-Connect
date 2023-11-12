import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const LoginForm = ({ toggleForm, setResponse }) => {
	const navigate = useNavigate();

	const [logUser, setLogUser] = useState({
		email: "",
		password: "",
	});

	const handleLogChange = ({ currentTarget: input }) => {
		setLogUser({ ...logUser, [input.name]: input.value });
	};

	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			const res = await AuthService.authenticateUser(logUser);
			setResponse(res.data);
			console.log(res.status);
			if (res.status == 200) {
				localStorage.setItem("DRFAuthToken", res.data.token);
				window.location.href = "/home";
			}
			navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container__form container--signup">
			<form className="form" id="form1" onSubmit={handleSignIn}>
				<h2 className="form__title">Login</h2>
				<p>Sign in to access your account</p>
				<input
					type="text"
					placeholder="Email"
					className="input"
					name="email"
					onChange={handleLogChange}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					className="input"
					name="password"
					onChange={handleLogChange}
					required
				/>
				<div>
					<input type="checkbox" id="check" />
					<label htmlFor="check">Remember me</label>
				</div>
				<button className="btn" type="submit">
					Sign In
				</button>
			</form>

			<div className="outer_btns">
				<a href="#" className="page_links">
					forgot password?
				</a>
				<span>
					Don't have account?
					<a onClick={toggleForm} className="page_links">
						Register
					</a>
				</span>
			</div>
		</div>
	);
};

export default LoginForm;
