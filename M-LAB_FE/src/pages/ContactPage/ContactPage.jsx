import React from "react";

// AboutPage Components
import Footer from "../../components/Common/Footer/Footer";

import FirstSection from "../../components/FirstSection/FirstSection";

import "./ContactPage.css";
import SecondSection from "./SecondSection/SecondSection";
import ParticlesComponent from "../../components/Common/Particles/ParticlesComponent";
import FifthSection from "../AboutPage/FifthSection/FifthSection";

function AboutPage() {
	return (
		<>
			<FirstSection
				title="Contact Page Title"
				quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod
					id nisi."
				backgroundImage="/assets/aboutBg.jpg"
			/>
			<div className="third">
				<ParticlesComponent />
				<SecondSection />
				<FifthSection />
			</div>
			<Footer />
		</>
	);
}

export default AboutPage;
