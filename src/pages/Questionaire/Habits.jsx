import { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const PersonalHabits = () => {
	const navigate = useNavigate();
	const [habits, setHabits] = useState({
		cleanliness: "",
		routine: "",
		guests: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setHabits({ ...habits, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(habits);
		localStorage.setItem("habits", JSON.stringify(habits));
		navigate("/communications");
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Personal Habits & Preferences</h2>
					<span>
						<label htmlFor="hobbies">Cleanliness or tidiness Preferences</label>
						<input
							type="text"
							id="cleanliness"
							name="cleanliness"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="routine">
							Any specific routine or habits affecting shaired space?
						</label>
						<input
							type="text"
							id="routine"
							name="routine"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="guests">
							Comfortable with occasional guests staying over?
						</label>
						<input
							type="text"
							id="guests"
							name="guests"
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

export default PersonalHabits;
