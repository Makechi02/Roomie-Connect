import { useState } from "react";
import "./forms.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Overlay from "./Overlay";

const Forms = () => {
	const [response, setResponse] = useState("");

	const toggleForm = () => {
		const container = document.querySelector(".container");
		container.classList.contains("right-panel-active")
			? container.classList.remove("right-panel-active")
			: container.classList.add("right-panel-active");
	};

	return (
		<div className="forms">
			<span className={`msg ${response.success}`}>{response.message}</span>
			<div className="container right-panel-active">
				<LoginForm toggleForm={toggleForm} setResponse={setResponse} />
				<RegisterForm toggleForm={toggleForm} setResponse={setResponse} />
				<Overlay />
			</div>
		</div>
	);
};

export default Forms;
