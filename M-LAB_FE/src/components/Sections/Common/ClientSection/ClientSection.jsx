import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ClientSection.css";

// import Swiper core and required modules
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([Autoplay]);

const ClientSection = () => {
	return (
		<div className="tst">
			<section className="fifth-section">
				<h2 className="section-title">Our clients</h2>
			</section>
			<Swiper
				spaceBetween={30}
				slidesPerView={"auto"}
				loop={true}
				speed={1000}
				autoplay={{ delay: 1000 }}
			>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
					<SwiperSlide key={index}>
						<img src={`./assets/asset ${index}.png`} alt={`Company ${index}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ClientSection;
