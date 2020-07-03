import React from "react";
import "./services.css";
import Card from "../card";

function Services({data}) {
	return (
		<section className="flex serviceContainer">
			{data.map(service => <Card data={service} />)}
		</section>
	)
}

export default Services;
