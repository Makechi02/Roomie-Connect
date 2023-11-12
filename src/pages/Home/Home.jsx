import "./Home.css";
import avatar from "../../assets/avatar.jpeg";
import { useNavigate } from "react-router-dom";
import Roomie from "../Roomies/Roomie";
import About from "../About/About";
import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";
import Contact from "../Contact/Contact";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isToggle, setToggle] = useState(false);
	const navigate = useNavigate();

	const toggleMenuBar = () => {
		setIsOpen(!isOpen);
	};

	const toggleFloat = () => {
		setToggle(!isToggle);
		setIsOpen(false);
	};

	const questionairs = () => {
		navigate("/lifestyle");
	};

	return (
		<div className="home">
			<FaBars className="menubar" onClick={toggleMenuBar} />
			<div className="sidebar" id={`${isOpen}`}>
				<GiCrossMark className="close-icon" onClick={toggleMenuBar} />
				<img src={avatar} />
				<div className="userdata">
					<p>John Doe</p>
					<p>johndoe@example.com</p>
					<p>Male</p>
				</div>
				<div className="preferences">
					<span onClick={questionairs}>QUESTIONNIARE</span>
					<span onClick={toggleFloat}>CONTACT</span>
				</div>
			</div>
			<div className="mainbar">
				<div className="float" id={`${isToggle}`}>
					<GiCrossMark className="close" onClick={toggleFloat} />
					<Contact />
				</div>
				<Roomie />
				<About />
			</div>
		</div>
	);
};

export default Home;
