import React from "react";

// AboutPage Components
import FirstSection from "../../components/FirstSection/FirstSection";
import Footer from "../../components/Common/Footer/Footer";

import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import ForthSection from "./ForthSection/ForthSection";
import FifthSection from "./FifthSection/FifthSection";

import "./AboutPage.css";

function AboutPage() {
	return (
		<>
			<FirstSection
				title="About Page Title"
				quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod
					id nisi."
				backgroundImage="/assets/aboutBg.jpg"
				// showButtonsAndQuote={false}
			/>
			<div className="second">
				<SecondSection />
				<ThirdSection />
				<ForthSection />
				<FifthSection />
			</div>
			<Footer />
		</>
	);
}

export default AboutPage;
