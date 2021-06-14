import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

function Navbar() {
	return (
		<nav>
			<ul className="primaryNavigation">
				<li className="primaryNavigation__item">
					<Link to="/#services" className="primaryNavigation__link">Services</Link>
				</li>
				<li className="primaryNavigation__item">
					<Link to="/#kontakt" className="primaryNavigation__link">Kontakt</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
