// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header>
			<nav>
				<div className="logo-container">
					<img src="/assets/M-LAG_MAIN.png" alt="M-lab logo" />
				</div>
				<ul className="nav">
					<li className="nav-link">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-link">
						<Link to="/about">About</Link>
					</li>
					<li className="nav-link">
						<Link to="/about">Our Offers</Link>
					</li>
					<li className="nav-link">
						<Link to="/about">Contact</Link>
					</li>
					{/* Add links for other pages */}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
