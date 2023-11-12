import "./Contact.css";
import { useState } from "react";
import swal from "sweetalert";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
	let [values, setValues] = useState({
		FullName: "",
		EmailAddress: "",
		Message: "",
	});

	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (
				values.FullName == "" ||
				values.EmailAddress == "" ||
				values.Message == ""
			) {
				onInputError();
			} else {
				console.log("send data to backend for email transportation");
				onSuccess();
			}
		} catch (err) {
			onError();
			console.log(err);
		}
	};

	const onSuccess = () => {
		swal({
			title: "Success",
			text: "Thanks for contacting roommate match, message successfully sent.",
			icon: "success",
			button: "OK",
		});
	};

	const onError = () => {
		swal({
			title: "Ooops....",
			text: "Someting went wrong.Check your connection....",
			icon: "error",
			button: "OK",
		});
	};

	const onInputError = () => {
		swal({
			title: "Ooops....",
			text: "All fields are required..",
			icon: "error",
			button: "OK",
		});
	};

	return (
		<div className="contactPage" id="contacts">
			<h3>Mail...</h3>
			<div className="emailContainer">
				<section className="emailForm">
					<form>
						<input
							placeholder="your name"
							name="FullName"
							type="text"
							onChange={handleChange}
							className="FullName"
						/>
						<input
							placeholder="email address"
							name="EmailAddress"
							type="email"
							onChange={handleChange}
							className="email"
						/>
						<textarea
							placeholder="Leave a comment"
							name="Message"
							onChange={handleChange}
						/>
						<button onClick={handleSubmit}>
							SEND
							<FaPaperPlane />
						</button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default Contact;
