import { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const WorkStudy = () => {
	const navigate = useNavigate();
	const [workStudy, setWorkStudy] = useState({
		schedule: "",
		quiet: "",
		noise: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setWorkStudy({ ...workStudy, [input.name]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(workStudy);
		localStorage.setItem("workstudy", JSON.stringify(workStudy));
		navigate("/habits");
	};

	return (
		<div className="quizes">
			<div className="form-one">
				<form onSubmit={() => handleSubmit(event)}>
					<h2>Work & Study Schedule</h2>
					<span>
						<label htmlFor="schedule">Typically daily Schedule</label>
						<input
							type="text"
							id="schedule"
							name="schedule"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="quiet">specific quite hours or days</label>
						<input
							type="text"
							id="quiet"
							name="quiet"
							onChange={handleChange}
						/>
					</span>
					<span>
						<label htmlFor="noise">preferences regarding noise levels?</label>
						<textarea
							id="noise"
							name="noise"
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

export default WorkStudy;
