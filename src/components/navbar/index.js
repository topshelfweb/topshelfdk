import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

function Navbar() {
	return (
		<nav>
			<ul className="primaryNavigation">
				<li className="primaryNavigation__item">
					<Link to="/#contact" className="primaryNavigation__link">Kontakt os</Link>
				</li>
				<li className="primaryNavigation__item">
					<Link to="/#about" className="primaryNavigation__link">Om os</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
