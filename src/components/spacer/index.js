import React from "react";

function Spacer({ horizontal = 0, vertical = 0}) {
	return (
		<div style={{
			marginTop: vertical / 2 + "px",
			marginBottom: vertical / 2 + "px",
			marginLeft: horizontal / 2 + "px",
			marginRight: horizontal / 2 + "px"
		}}></div>
	)
}

export default Spacer;
