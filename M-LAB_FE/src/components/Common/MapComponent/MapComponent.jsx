import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import faker from "faker";

const MapComponent = () => {
	const [location, setLocation] = useState({
		lat: 0,
		lng: 0,
		city: "",
		country: "",
	});

	useEffect(() => {
		// Generate random location using Faker
		const generateRandomLocation = () => {
			setLocation({
				lat: parseFloat(faker.address.latitude()),
				lng: parseFloat(faker.address.longitude()),
				city: faker.address.city(),
				country: faker.address.country(),
			});
		};

		// Initially generate a random location
		generateRandomLocation();

		// Optionally, you can update the location at regular intervals
		const intervalId = setInterval(generateRandomLocation, 5000);

		// Cleanup interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	return (
		<MapContainer
			center={[location.lat, location.lng]}
			zoom={3}
			style={{ height: "100%", width: "100%" }}
			scrollWheelZoom={false}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[location.lat, location.lng]}>
				<Popup>
					{location.city}, {location.country}
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MapComponent;
