import React from "react";
import MapComponent from "../../../Common/MapComponent/MapComponent";
import "./MapSection.css";
function MapSection() {
	return (
		<section className="about-fifth-section">
			<h2 className="section-title">Our Address</h2>
			<div className="about-map-container">
				<MapComponent />
			</div>
		</section>
	);
}

export default MapSection;
