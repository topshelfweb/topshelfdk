import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero({ hero }) {
	return (
		<div className="hero" style={{
			backgroundImage: `url(${!!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image})`
		}}>
			<div style={{display:"flex", flexDirection: "column"}}>
				<h1 className="hero__heading">{ hero.caption }</h1>
				<a href={ "mailto:"+hero.cta } className="CTAphone">
					<FontAwesomeIcon icon={faEnvelope} style={{height:"1em"}} /> { hero.cta }
				</a>
			</div>
		</div>
	)
}

export default Hero;
