import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero({ data }) {
	return (
		<div className="hero" style={{
			backgroundImage: `url(${!!data.image.childImageSharp ? data.image.childImageSharp.fluid.src : data.image})`
		}}>
			<div style={{display:"flex", flexDirection: "column"}}>
				<h1 className="hero__heading">{ data.caption }</h1>
				<a href={ "mailto:"+data.cta } className="CTAphone">
					<FontAwesomeIcon icon={faEnvelope} style={{height:"1em"}} /> { data.cta }
				</a>
			</div>
		</div>
	)
}

export default Hero;
