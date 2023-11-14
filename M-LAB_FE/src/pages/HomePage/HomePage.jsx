import React from "react";

// HomePage Components
import Footer from "../../components/Footer/Footer";
import ParticlesComponent from "../../components/Common/Particles/ParticlesComponent";

// HomePage Sections
import FirstSection from "../../components/Sections/Common/FirstSection/FirstSection";
import HomeSecondSection from "../../components/Sections/HomeSecondSection/HomeSecondSection";
import HomeCardsSection from "../../components/Sections/HomeCardsSection/HomeCardsSection";
import SolutionsSection from "../../components/Sections/Common/SolutionsSection/SolutionsSection";
import ClientSection from "../../components/Sections/Common/ClientSection/ClientSection";
import MapSection from "../../components/Sections/Common/MapSection/MapSection";

// HomePage CSS
import "./HomePage.css";
function HomePage() {
	return (
		<>
			<FirstSection
				title="Lorem ipsum dolor elit"
				buttonText1="Lorem ipsum dollor"
				buttonText2="lorem"
				quote="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quod id nisi."
				backgroundImage="/assets/bg.jpg"
				showButtons
			/>

			<div className="second">
				<HomeSecondSection />
				<HomeCardsSection />
			</div>
			<div className="third">
				<ParticlesComponent />
				<SolutionsSection />
				<ClientSection />
				<MapSection />
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
