import React from "react";
import Helmet from "react-helmet";
import SiteHeader from "../site-header";
import "../all.css";

function Layout({ children }) {
	return (
		<div>
			<Helmet>
				<html lang="da" />
				<meta name="description" content="I Mit Firma laver vi ting som kan sælges." />
				<title>topshelf - moderne webløsninger</title>
			</Helmet>
			<SiteHeader />
			<main>
				{ children }
			</main>
		</div>
	);
}

export default Layout;
