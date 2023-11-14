import React from "react";

// HomePage Components
// import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import ParticlesComponent from "../../components/Common/Particles/ParticlesComponent";

// HomePage Sections
import FirstSection from "../../components/FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import ForthSection from "./ForthSection/ForthSection";
import FifthSection from "./FifthSection/FifthSection";

// HomePage CSS
import "./HomePage.css";

function HomePage() {
	return (
		<>
			<FirstSection
				title="Lorem ipsum dolor elit"
				buttonText1="Lorem ipsum dollor"
				buttonText2="lorem"
				quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod
					id nisi."
				backgroundImage="/assets/bg.jpg"
				showButtons={true}
			/>
			<div className="second">
				<SecondSection />
				<ThirdSection />
			</div>
			<div className="third">
				<ParticlesComponent />
				<ForthSection />
				<FifthSection />
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
