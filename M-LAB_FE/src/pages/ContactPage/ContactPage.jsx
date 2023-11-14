import React from "react";

// AboutPage Components
import Footer from "../../components/Footer/Footer";

import FirstSection from "../../components/Sections/Common/FirstSection/FirstSection";

import "./ContactPage.css";
import ParticlesComponent from "../../components/Common/Particles/ParticlesComponent";
import MapSection from "../../components/Sections/Common/MapSection/MapSection";
import ContactSecondSection from "../../components/Sections/ContactSecondSection/ContactSecondSection";

function ContactPage() {
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
				<ContactSecondSection />
				<MapSection />
			</div>
			<Footer />
		</>
	);
}

export default ContactPage;
