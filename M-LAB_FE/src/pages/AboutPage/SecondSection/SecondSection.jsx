import React from "react";
import "./SecondSection.css";

function SecondSection() {
	return (
		<section className="about-second-section">
			<div className="about-second-image-container">
				<img src="/assets/M.jpg" alt="placeholder" />
			</div>
			<div className="about-content">
				<h2 className="about-section-title">Who are we ?</h2>
				<p className="about-section-desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa
					autem distinctio eum dolorum molestias consequuntur voluptatibus
					repudiandae totam voluptatum eligendi in optio voluptates praesentium
					quod beatae, ducimus accusantium consectetur. Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Dolorum, quas Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Voluptas, voluptatum.
					<br />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
					quas Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptas, voluptatum. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Dolorum, quas Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Voluptas, voluptatum.
				</p>
			</div>
		</section>
	);
}

export default SecondSection;
