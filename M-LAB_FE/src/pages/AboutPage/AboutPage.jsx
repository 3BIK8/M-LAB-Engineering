import React from "react";

// AboutPage Components
import FirstSection from "../../components/Sections/Common/FirstSection/FirstSection";
// import Footer from "../../components/Common/Footer/Footer";
import Footer from "../../components/Footer/Footer";

// AboutPage Sections
import AboutSecondSection from "../../components/Sections/AboutSecondSection/AboutSecondSection";
import AboutCardsSection from "../../components/Sections/AboutCardsSection/AboutCardsSection";
import ValuesSection from "../../components/Sections/Common/ValuesSection/ValuesSection";
import MapSection from "../../components/Sections/Common/MapSection/MapSection";

import "./AboutPage.css";

function AboutPage() {
	return (
		<>
			<FirstSection
				title="About Page Title"
				quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod
					id nisi."
				backgroundImage="/assets/aboutBg.jpg"
			/>
			<div className="second">
				<AboutSecondSection />
				<AboutCardsSection />
				<ValuesSection />
				<MapSection />
			</div>
			<Footer />
		</>
	);
}

export default AboutPage;
