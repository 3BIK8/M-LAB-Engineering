import React from "react";

// AboutPage Components
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";

import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import ForthSection from "./ForthSection/ForthSection";
import FifthSection from "./FifthSection/FifthSection";

import "./AboutPage.css";

function AboutPage() {
	return (
		<>
			<div className="first">
				<Header />
				<FirstSection />
			</div>
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
