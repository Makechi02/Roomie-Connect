import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Otp from "./pages/OTP/Otp";
import About from "./pages/About/About";
import {
	Interests,
	Lifestyle,
	Affordability,
	WorkStudy,
	PersonalHabits,
	Conflicts,
	Expectations,
} from "./pages/Questionaire";
import { Forms, UpdateForm } from "./pages";

function App() {
	return (
		<div className="box">
			<Routes>
				<Route path="/" element={<Forms />} />
				<Route path="/home" element={<Home />} />
				<Route path="/update" element={<UpdateForm />} />
				<Route path="/otp" element={<Otp />} />
				<Route path="/about" element={<About />} />
				<Route path="/lifestyle" element={<Lifestyle />} />
				<Route path="/interests" element={<Interests />} />
				<Route path="/affordability" element={<Affordability />} />
				<Route path="/work-study" element={<WorkStudy />} />
				<Route path="/habits" element={<PersonalHabits />} />
				<Route path="/communications" element={<Conflicts />} />
				<Route path="/expectations" element={<Expectations />} />
			</Routes>
		</div>
	);
}

export default App;
