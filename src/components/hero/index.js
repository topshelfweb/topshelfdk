import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Hero({ hero, phonenumber }) {
	return (
		<div className="hero" style={{
			backgroundImage: `url(${!!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image})`
		}}>
			<div style={{display:"flex", flexDirection: "column"}}>
				<h1 className="hero__heading">{ hero.caption }</h1>
				<a href={ "tel:0045"+phonenumber } className="CTAphone">
					<FontAwesomeIcon icon={faPhoneAlt} style={{height:"1em"}} /> { phonenumber }
				</a>
			</div>
		</div>
	)
}

export default Hero;
