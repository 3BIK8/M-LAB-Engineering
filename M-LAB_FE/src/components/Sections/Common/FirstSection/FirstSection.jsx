// FirstSection.js
import React from "react";
import { FaArrowRight, FaQuoteRight } from "react-icons/fa";
import "./FirstSection.css";
import Header from "../../../Header/Header";

function FirstSection({
	title,
	buttonText1,
	buttonText2,
	quote,
	backgroundImage,
	showButtons,
}) {
	return (
		<div
			className="first"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<Header />
			<section className="first-section">
				<div className="dash"></div>
				<div className="section-content">
					<h1 className="title">{title}</h1>
					{showButtons && (
						<div className="buttons-container">
							<button className="btn">
								{buttonText1}{" "}
								<FaArrowRight style={{ verticalAlign: "middle" }} />
							</button>
							<button className="btn">
								{buttonText2}{" "}
								<FaArrowRight style={{ verticalAlign: "middle" }} />
							</button>
						</div>
					)}
				</div>
				<div className="quote">
					<p>{quote}</p>
					<div className="quote-icon">
						<FaQuoteRight />
					</div>
				</div>
			</section>
		</div>
	);
}

export default FirstSection;
