import React from "react";
import ValueCard from "../../../components/Common/ValueCard/ValueCard";
import faker from "faker";
import "./ForthSection.css";

const generateDummyData = () => ({
	title: faker.lorem.word(),
	description: faker.lorem.sentence(),
});

const ForthSection = () => {
	return (
		<section className="about-forth-section">
			<h2 className="about-section-title">Our Values</h2>
			<div className="about-value-cards">
				{[1, 2, 3, 4, 5].map((index) => (
					<ValueCard
						key={index}
						icon={`./assets/icon-${index}.png`}
						title={generateDummyData().title}
						description={generateDummyData().description}
					/>
				))}
			</div>
		</section>
	);
};

export default ForthSection;
