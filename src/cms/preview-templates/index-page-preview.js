import React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

function IndexPagePreview({ entry, getAsset }) {
	let data = entry.getIn(["data"]).toJS();

	if (data) {
		return (
			<IndexPageTemplate
				hero={data.hero}
				services={data.services}
				contact={data.contact} />
		);
	} else {
		return <div>Loading...</div>
	}
}

export default IndexPagePreview;
