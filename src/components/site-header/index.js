import React from "react";
import Navbar from "../navbar";
import { Link } from "gatsby";
import "./header.css";

function SiteHeader() {
	return (
		<header className="siteHeader wrapper">
			<Link to="/" class="siteHeader__brand">firmalogo</Link>
			<Navbar />
		</header>
	)
}

export default SiteHeader;
