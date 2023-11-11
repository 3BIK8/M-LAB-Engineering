import React from "react";

// HomePage Components
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import ParticlesComponent from "../../components/Common/Particles/ParticlesComponent";

// HomePage Sections
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import ForthSection from "./ForthSection/ForthSection";
import FifthSection from "./FifthSection/FifthSection";

// HomePage CSS
import "./HomePage.css";

function HomePage() {
	return (
		<>
			<div className="first">
				<Header />
				<FirstSection />
			</div>
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
