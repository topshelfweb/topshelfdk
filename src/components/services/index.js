import React from "react";
import "./services.css";

function Services({services}) {
	return (
		<section className="flex serviceContainer">
			{services.map(service => {
				return (
					<article className="serviceCard" key={ service.title }>
						<img src={ service.image.publicURL ? service.image.publicURL : service.image } className="serviceCard__image" alt="" />
						<h1>{ service.title }</h1>
				<p>{ service.content }</p>
					</article>
				)
			})}
		</section>
	)
}

export default Services;
