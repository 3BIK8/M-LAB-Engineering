import React from "react";
import "./ValueCard.css";

function ValueCard(props) {
	return (
		<div className="ValueCard">
			<div className="ValueCard-content">
				<div className="ValueCard-icon">
					<img src={props.icon} alt="icon"></img>
				</div>
				<h3 className="ValueCard-title">{props.title}</h3>
				<div className="line"></div>
				<p className="ValueCard-desc">{props.description}</p>
			</div>
		</div>
	);
}

export default ValueCard;
