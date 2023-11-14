import React, { useState } from "react";
import "./ContactForm.css"; // Don't forget to create a CSS file for your styles

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = () => {
		// Handle the form submission logic here
		// You can access the form data using the state variables (email, username, subject, message)
	};

	return (
		<div className="container">
			<div className="contact-card">
				<div className="inputBox">
					<input
						type="text"
						required
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<span>Full Name</span>
				</div>

				<div className="inputBox">
					<input
						type="text"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span className="user">Email</span>
				</div>

				<div className="inputBox">
					<input
						type="text"
						required
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
					<span>Subject</span>
				</div>

				<div className="inputBox">
					<textarea
						required
						rows="10"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
					<span>Message</span>
				</div>
				<button className="enter" onClick={handleSubmit}>
					Enter
				</button>
			</div>
		</div>
	);
};

export default ContactForm;
