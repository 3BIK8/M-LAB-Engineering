// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				{/* Add routes for other pages */}
			</Routes>
		</Router>
	);
}

export default App;
