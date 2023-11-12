import { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const Affordability = () => {
	const navigate = useNavigate();
	const [affordability, setAffordability] = useState({
		budget: "",
		expenses: "",
		finance: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setAffordability({ ...affordability, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(affordability);
		localStorage.setItem("affordability", JSON.stringify(affordability));
		navigate("/work-study");
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Affordability</h2>
					<span>
						<label htmlFor="budget">Monthly budget for rent utilities</label>
						<input
							type="text"
							id="budget"
							name="budget"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="expenses">
							Open to shairing expenses for common items?
						</label>
						<input
							type="text"
							id="expenses"
							name="expenses"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="financials">
							Any financial prefferences to discuss?
						</label>
						<textarea
							id="financials"
							name="finance"
							onChange={handleChange}
						></textarea>
					</span>
					<div>
						<input type="submit" value="next" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Affordability;
