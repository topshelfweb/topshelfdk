import React from "react";
import Navbar from "../navbar";
import { Link } from "gatsby";
import "./header.css";
import logo from "../../img/logo.svg";

function SiteHeader() {
	return (
		<header className="siteHeader wrapper">
			<Link to="/" className="siteHeader__brand">
				<img src={logo} height="48" alt="topshelf logo" className="siteBrand__logo" />
			</Link>
			<Navbar />
		</header>
	)
}

export default SiteHeader;
