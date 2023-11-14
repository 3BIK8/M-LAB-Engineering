import React from "react";
import Card from "../../Common/Card/Card";
import "./HomeCardsSection.css";
import { FaUserAlt, FaSuitcase } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
function HomeCardsSection() {
	return (
		<section className="third-section">
			<Card
				icon={<FaUserAlt />}
				title="Lorem ipsum dolor sit amet consectetur adipisicing."
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fugiat sequi molestiae enim! Molestiae eligendi, porro sint error officia velit tempora beatae ipsam odit architecto.."
				image="./assets/M-LAG_MAIN_2.png"
			/>

			<Card
				icon={<FaSuitcase />}
				title="Lorem ipsum dolor sit amet consectetur, adipisicing elit"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore magni animi porro corporis ratione, harum dolores! Atque magnam perferendis nulla temporibus architecto omnis magni distinctio sed labore?"
				image="./assets/M-LAG_MAIN_2.png"
			/>

			<Card
				icon={<FaEarthAfrica />}
				title="Lorem ipsum dolor sit amet consectetur."
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit inventore natus cumque, in odit fugiat quasi, beatae, ea error dolor nisi est quibusdam? Cumque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, animi!"
				image="./assets/M-LAG_MAIN_2.png"
			/>
		</section>
	);
}

export default HomeCardsSection;
