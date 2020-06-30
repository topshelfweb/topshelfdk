import React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

function IndexPagePreview({ entry, getAsset }) {
	let data = entry.getIn(["data"]).toJS();

	if (data) {
		console.log(data)
		return (
			<IndexPageTemplate
				hero={data.hero}
				phonenumber={data.phonenumber}
				address={data.address}
				services={data.services}
				contacttext={data.contacttext} />
		);
	} else {
		return <div>Loading...</div>
	}
}

export default IndexPagePreview;
