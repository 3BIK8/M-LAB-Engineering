import React from "react";
import MapComponent from "../../../components/Common/MapComponent/MapComponent";
import "./FifthSection.css";
function FifthSection() {
	return (
		<section className="about-fifth-section">
			<h2 className="section-title">Our Address</h2>
			<div className="about-map-container">
				<MapComponent />
			</div>
		</section>
	);
}

export default FifthSection;
