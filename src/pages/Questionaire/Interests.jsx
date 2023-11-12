import { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const Interests = () => {
	const navigate = useNavigate();
	const [interests, setInterests] = useState({
		hobbies: "",
		socials: "",
		fitness: "",
		Entertainment: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setInterests({ ...interests, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(interests);
		localStorage.setItem("interests", JSON.stringify(interests));
		navigate("/affordability");
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Interests & hobbies</h2>
					<span>
						<label htmlFor="hobbies">Hobbies & interests</label>
						<input
							type="text"
							id="hobbies"
							name="hobbies"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="socials">social activities</label>
						<input
							type="text"
							id="socials"
							name="socials"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="fitness">fitness & sports</label>
						<input
							type="text"
							id="fitness"
							name="fitness"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="enter">Entertainment prefferences</label>
						<input
							type="text"
							id="enter"
							name="Entertainment"
							onChange={handleChange}
						/>
					</span>
					<div>
						<input type="submit" value="next" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Interests;
