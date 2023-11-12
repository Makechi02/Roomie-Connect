import { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const Lifestyle = () => {
	const navigate = useNavigate();
	const [lifestyle, setLifestyle] = useState({
		lifeS: "",
		personality: "",
		restrictions: "",
		freetime: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setLifestyle({ ...lifestyle, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(lifestyle);
		localStorage.setItem("lifestyle", JSON.stringify(lifestyle));
		navigate("/interests");
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Lifestyle preferences</h2>
					<span>
						<label htmlFor="lifestyle">Describe your lifestyle</label>
						<input
							type="text"
							id="lifestyle"
							name="lifeS"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="personality">Morning person or night owl</label>
						<input
							type="text"
							id="personality"
							name="personality"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="restrictions">
							Any dietary preferences or restriction
						</label>
						<input
							type="text"
							id="restrictions"
							name="restrictions"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="freetime">How do you spend your freetime</label>
						<input
							type="text"
							id="freetime"
							name="freetime"
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

export default Lifestyle;
