import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaTrain, FaPlane, FaCar } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import "./SolutionsSection.css";
const SolutionsSection = () => {
	const [activeCircle, setActiveCircle] = useState(null);

	useEffect(() => {
		const circles = document.querySelectorAll(".circle");
		const descriptions = document.querySelectorAll(".circles-content p");

		const handleCircleMouseOver = (index) => {
			setActiveCircle(index);
		};

		const handleCircleMouseLeave = () => {
			setActiveCircle(null);
		};

		circles.forEach((circle, index) => {
			circle.addEventListener("mouseover", () => {
				// Hide all descriptions
				descriptions.forEach((description) => {
					description.style.display = "none";
				});

				// Display the description corresponding to the hovered circle
				descriptions[index].style.display = "block";
			});

			circle.addEventListener("mouseleave", handleCircleMouseLeave);
			circle.addEventListener("mouseover", () => handleCircleMouseOver(index));
		});

		// Cleanup event listeners when the component unmounts
		return () => {
			circles.forEach((circle, index) => {
				circle.removeEventListener("mouseover", () =>
					handleCircleMouseOver(index)
				);
				circle.removeEventListener("mouseleave", handleCircleMouseLeave);
			});
		};
	}, []);
	return (
		<section className="forth-section">
			<h2 className="section-title">Our solutions</h2>
			<div className="circles-container">
				<div className="circle c1">
					<span className="icon">
						<FaLaptopCode />
					</span>
					<h4 className="solution">lorem</h4>
				</div>
				<div className="circle c2">
					<span className="icon">
						<FaChalkboardUser />
					</span>
					<h4 className="solution">ipsum</h4>
				</div>
				<div className="circle c3">
					<span className="icon">
						<FaTrain />
					</span>
					<h4 className="solution">amit</h4>
				</div>
				<div className="circle c4">
					<span className="icon">
						<FaPlane />
					</span>
					<h4 className="solution">dolor test</h4>
				</div>
				<div className="circle c5">
					<span className="icon">
						<FaCar />
					</span>
					<h4 className="solution">elittext</h4>
				</div>
				<div className="circles-content">
					<p className="c1p circle-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						repudiandae modi molestias! Nostrum nesciunt iusto omnis dolorum
						placeat, delectus nihil amet animi neque. Quisquam blanditiis
						aspernatur quam ut, quibusdam temporibus!
					</p>
					<p className="c2p circle-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
						rem ab maxime odio doloremque officia voluptatibus fugit.
					</p>
					<p className="c3p circle-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos
						sit quia, mollitia ab iure consequatur atque amet architecto odit
						veritatis voluptas assumenda.
					</p>
					<p className="c4p circle-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
						dolorum modi ratione voluptatum tempore voluptatem quia! Vitae, id.
						Incidunt, accusantium.
					</p>
					<p className="c5p circle-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						repudiandae modi molestias! Nostrum nesciunt iusto omnis dolorum
						placeat, delectus nihil amet animi neque. Quisquam blanditiis
						aspernatur quam ut.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SolutionsSection;
