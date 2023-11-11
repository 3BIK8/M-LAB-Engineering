import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./FifthSection.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// install Swiper modules
SwiperCore.use([Autoplay]);

const FifthSection = () => {
	return (
		<section className="fifth-section">
			<h2 className="section-title">Our clients</h2>
			<Swiper
				spaceBetween={30}
				slidesPerView={"auto"}
				loop={true}
				speed={1000}
				autoplay={{ delay: 0 }}
			>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
					<SwiperSlide key={index}>
						<img src={`./assets/asset ${index}.png`} alt={`Company ${index}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default FifthSection;
