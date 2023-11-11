import React from "react";
import "./Card.css";

function Card(props) {
	return (
		<div className="card">
			<div className="card-content">
				<div className="card-icon">{props.icon}</div>
				<h3 className="card-title">{props.title}</h3>
				<div className="line"></div>
				<p className="card-desc">{props.description}</p>
			</div>
			<div className="icon-container">
				<img src={props.image} alt="M-LAB ICON" />
			</div>
		</div>
	);
}

export default Card;
