import { useState } from "react";
import "./Quiz.css";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Expectations = () => {
	const navigate = useNavigate();
	const [expectations, setExpectations] = useState({
		qualities: "",
		responsibilities: "",
		cohabitating: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setExpectations({ ...expectations, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { lifeS, personality, restrictions, freetime } = JSON.parse(
			localStorage.getItem("lifestyle"),
		);
		const { hobbies, socials, fitness, Entertainment } = JSON.parse(
			localStorage.getItem("interests"),
		);
		const { schedule, quiet, noise } = JSON.parse(
			localStorage.getItem("workstudy"),
		);
		const { cleanliness, routine, guests } = JSON.parse(
			localStorage.getItem("habits"),
		);
		const { communication, conflictresolution, boundaries } = JSON.parse(
			localStorage.getItem("communication"),
		);
		const { budget, expenses, finance } = JSON.parse(
			localStorage.getItem("affordability"),
		);
		const data = {
			lifestyle: lifeS,
			personality: personality,
			restrictions: restrictions,
			freetime: freetime,
			hobbies: hobbies,
			socials: socials,
			fitness: fitness,
			entertainment: Entertainment,
			schedule: schedule,
			quiet: quiet,
			noise: noise,
			cleanliness: cleanliness,
			routine: routine,
			guests: guests,
			communication: communication,
			conflictresolution: conflictresolution,
			boundaries: boundaries,
			budget: budget,
			expenses: budget,
			// expenses: expenses,
			finance: finance,
			qualities: expectations.qualities,
			responsibilities: expectations.responsibilities,
			cohabitating: expectations.cohabitating,
		};
		console.log(data);
		// Swal.fire({
		// 	title: "ROOMIE CONNECT",
		// 	text: "Submission received successfully",
		// 	icon: "warning",
		// 	confirmButtonColor: "#3085d6",
		// 	confirmButtonText: "Proceed",
		// }).then((result) => {
		// 	if (result.isConfirmed) {
		// 		navigate("/home");
		// 	}
		// });
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Roommate Expectations</h2>
					<span>
						<label htmlFor="qualities">Valued qualities</label>
						<input
							type="text"
							id="qualities"
							name="qualities"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="responsibilities">
							Expectations for shaired responsibilities
						</label>
						<input
							type="text"
							id="responsibilities"
							name="responsibilities"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="cohabitating">
							Specific preferences for cohabitating
						</label>
						<input
							type="text"
							id="cohabitating"
							name="cohabitating"
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

export default Expectations;
