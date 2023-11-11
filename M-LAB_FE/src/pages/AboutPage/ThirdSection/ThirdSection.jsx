import React from "react";
import Card from "../../../components/Common/Card/Card";
import "./ThirdSection.css";
import { FaUserAlt } from "react-icons/fa";
import faker from "faker";

const ThirdSection = () => {
	const generateDummyCardData = () => {
		return {
			title: faker.name.findName(),
			description: faker.lorem.paragraph(),
			image: "./assets/M-LAG_MAIN_2.png",
		};
	};

	return (
		<section className="about-third-section">
			<h2 className="about-section-title">
				lorem dollor ipsum abitr dounat pchakh
			</h2>
			<p className="about-sd2">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
				fugiat sequi molestiae enim!
			</p>
			<div className="about-cards-container">
				{[...Array(6)].map((_, index) => (
					<Card
						key={index}
						icon={<FaUserAlt />}
						title={generateDummyCardData().title}
						description={generateDummyCardData().description}
						image={generateDummyCardData().image}
					/>
				))}
			</div>
		</section>
	);
};

export default ThirdSection;
