import React from "react";
import "./SecondSection.css";

function SecondSection() {
	return (
		<section className="second-section">
			<div className="content">
				<h2 className="section-title">M-LAB Engineering</h2>
				<p className="section-desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa
					autem distinctio eum dolorum molestias consequuntur voluptatibus
					repudiandae totam voluptatum eligendi in optio voluptates praesentium
					quod beatae, ducimus accusantium consectetur. Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Dolorum, quas Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Voluptas, voluptatum.
				</p>
			</div>
			<div className="second-image-container">
				<img src="/assets/M.jpg" alt="placeholder" />
			</div>
		</section>
	);
}

export default SecondSection;
