import { useEffect, useState } from "react";
import "./forms.css";
import axios from "axios";

const authToken = localStorage.getItem("DRFAuthToken");

const UpdateForm = () => {
	const [file, setFile] = useState(null);
	const [response, setResponse] = useState("");
	const [user, setUser] = useState({});

	const fetchUser = async () => {
		try {
			const res = await axios("http://127.0.0.1:8000/user", {
				method: "get",
				headers: {
					Authorization: `Token ${authToken}`,
				},
			});
			setUser(res.data.user);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const handleChange = ({ currentTarget: input }) => {
		setUser({ ...user, [input.name]: input.value });
	};

	const fileChange = (event) => {
		const image = event.target.files[0];
		setFile(image);
		document.getElementById("imgDisplay").src = URL.createObjectURL(image);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("username", user.username);
			formData.append("email", user.email);
			if (file) {
				formData.append("profile", file);
			}
			const res = await axios("http://127.0.0.1:8000/user/", {
				method: "PATCH",
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Token ${authToken}`,
				},
			});
			setResponse(res.data);
			if (res.data.success == "true") {
				window.location.href = "/home";
			}
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="forms">
			<span className={`msg ${response.success}`}>{response.message}</span>
			<div className="container right-panel-active">
				<div className="container__form container--signup">
					<form action="#" className="form" id="form2" onSubmit={handleSubmit}>
						<h2 className="form__title">Modify Account</h2>
						<div className="grid image_section">
							<span className="grids">
								<img
									src={`http://127.0.0.1:8000${user.profile}`}
									alt={`${user.username}`}
									id="imgDisplay"
								/>
							</span>
							<label htmlFor="profile">
								<svg
									className="icon"
									enableBackground="new 0 0 32 32"
									height="32px"
									id="Layer_1"
									version="1.1"
									viewBox="0 0 32 32"
									width="1rem"
									xmlSpace="preserve"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
								>
									<g id="camera">
										<path
											clipRule="evenodd"
											d="M16,10.001c-4.419,0-8,3.581-8,8c0,4.418,3.581,8,8,8   c4.418,0,8-3.582,8-8C24,13.583,20.418,10.001,16,10.001z M20.555,21.906c-2.156,2.516-5.943,2.807-8.459,0.65   c-2.517-2.156-2.807-5.944-0.65-8.459c2.155-2.517,5.943-2.807,8.459-0.65C22.42,15.602,22.711,19.391,20.555,21.906z"
											fill="#333333"
											fillRule="evenodd"
										/>
										<path
											clipRule="evenodd"
											d="M16,14.001c-2.209,0-3.999,1.791-4,3.999v0.002   c0,0.275,0.224,0.5,0.5,0.5s0.5-0.225,0.5-0.5V18c0.001-1.656,1.343-2.999,3-2.999c0.276,0,0.5-0.224,0.5-0.5   S16.276,14.001,16,14.001z"
											fill="#333333"
											fillRule="evenodd"
										/>
										<path
											clipRule="evenodd"
											d="M29.492,9.042l-4.334-0.723l-1.373-3.434   C23.326,3.74,22.232,3,21,3H11C9.768,3,8.674,3.74,8.214,4.886L6.842,8.319L2.509,9.042C1.055,9.283,0,10.527,0,12v15   c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V12C32,10.527,30.945,9.283,29.492,9.042z M30,27c0,0.553-0.447,1-1,1H3   c-0.553,0-1-0.447-1-1V12c0-0.489,0.354-0.906,0.836-0.986l5.444-0.907l1.791-4.478C10.224,5.25,10.591,5,11,5h10   c0.408,0,0.775,0.249,0.928,0.629l1.791,4.478l5.445,0.907C29.646,11.094,30,11.511,30,12V27z"
											fill="#333333"
											fillRule="evenodd"
										/>
									</g>
								</svg>
							</label>
							<input
								type="file"
								name="img"
								id="profile"
								onChange={fileChange}
							/>
						</div>
						<input
							type="text"
							placeholder="User Name"
							className="input"
							name="username"
							value={user.username}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							placeholder="Email"
							className="input"
							name="email"
							value={user.email}
							onChange={handleChange}
							required
						/>
						<button className="btn">Update</button>
					</form>
				</div>
				<div className="container__overlay">
					<div className="overlay"></div>
				</div>
			</div>
		</div>
	);
};

export default UpdateForm;
