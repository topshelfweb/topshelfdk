import React from "react";
import "./services.css";
import Card from "../card";

function Services({services}) {
	return (
		<section className="flex serviceContainer">
			{services.map(service => {
				return <Card data={service} />
			})}
		</section>
	)
}

export default Services;
