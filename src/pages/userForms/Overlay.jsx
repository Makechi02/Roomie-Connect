import { Link } from "react-router-dom";

const Overlay = () => {
	return (
		<div className="container__overlay">
			<div className="overlay">
				<div className="overlay__panel overlay--left">
					<OverlayText />
				</div>
				<div className="overlay__panel overlay--right">
					<OverlayText />
				</div>
			</div>
		</div>
	);
};

const OverlayText = () => {
	return (
		<div className="overlay_text">
			<h3>Roommate matching platform</h3>
			<h4>Welcome to our platform !</h4>
			<p>
				We are delighted to have you here and look forward to sharing our
				content and services with you.
			</p>
			<span>
				<Link to="/about" className="page_links">
					About Us
				</Link>
			</span>
		</div>
	);
};

export default Overlay;
