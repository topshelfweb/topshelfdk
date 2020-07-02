import React from "react";

function Card({ data }) {
	return (
		<article className="serviceCard" key={ data.title }>
			<img src={ data.image.publicURL ? data.image.publicURL : data.image } className="serviceCard__image" alt="" />
			<h1>{ data.title }</h1>
			<p>{ data.content }</p>
		</article>
	);
}

export default Card;
