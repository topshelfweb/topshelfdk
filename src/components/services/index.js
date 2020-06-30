import React from "react";

function Services({services}) {
	return (
		<section className="flex">
			{services.map(service => {
				return (
					<article>
						<h1>{ service.title }</h1>
					</article>
				)
			})}
		</section>
	)
}

export default Services;
