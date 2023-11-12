import "./Roomie.css";
import avatar from "../../assets/avatar.jpeg";

const Roomie = () => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="roomies">
			<h2>Your matches</h2>
			<div className="cards">
				{data.map((d, index) => (
					<div className="card" key={index}>
						<span>
							<img src={avatar} />
						</span>
						<span className="text-infor">
							<p>name</p>
							<p>age</p>
							<p>email</p>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Roomie;
