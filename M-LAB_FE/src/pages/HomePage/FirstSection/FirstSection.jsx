import React from "react";
import "./FirstSection.css";
import { FaArrowRight, FaQuoteRight } from "react-icons/fa";

function FirstSection() {
	return (
		<section className="first-section">
			<div className="dash"></div>
			<div className="section-content">
				<h1 className="title">Lorem ipsum dolor elit</h1>
				<div className="buttons-container">
					<button className="btn">
						Lorem ipsum dollor
						<FaArrowRight style={{ verticalAlign: "middle" }} />
					</button>
					<button className="btn">
						Lorem <FaArrowRight style={{ verticalAlign: "middle" }} />
					</button>
				</div>
			</div>
			<div className="quote">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod
					id nisi.
				</p>
				<div className="quote-icon">
					<FaQuoteRight />
				</div>
			</div>
		</section>
	);
}

export default FirstSection;
