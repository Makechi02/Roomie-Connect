import { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const Conflicts = () => {
	const navigate = useNavigate();
	const [conflicts, setConflicts] = useState({
		communication: "",
		conflictresolution: "",
		boundaries: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setConflicts({ ...conflicts, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(conflicts);
		localStorage.setItem("communication", JSON.stringify(conflicts));
		navigate("/expectations");
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Communication & Conflict resolution</h2>
					<span>
						<label htmlFor="communication">
							Preferred communication method with roommates?
						</label>
						<input
							type="text"
							id="communication"
							name="communication"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="conflictresolution">
							Approach to conflict resolution and communication
						</label>
						<input
							type="text"
							id="conflictresolution"
							name="conflictresolution"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="boundaries">
							Specific communication boundaries or guidelines?
						</label>
						<input
							type="text"
							id="boundaries"
							name="boundaries"
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

export default Conflicts;
