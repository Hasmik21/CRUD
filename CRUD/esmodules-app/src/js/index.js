"use strict";

import UI from "./modules/ui";
import POST from "./modules/postMethod";
import GET from "./modules/getMethod";
import PATCH from "./modules/patchMethod";
import DELETE from "./modules/deleteMethod";
import COMPLETE from "./modules/complete";
import FILTER from "./modules/filter";
import SELECT from "./modules/select";
import DELETEDITEMS from "./modules/removeItemsMethod";

async function engine() {
	const url = "http://localhost:8888/todos";

	const { form, screenInput } = UI;
	UI.start();

	POST(form, screenInput, url);

	await GET(UI, url);
	await SELECT(PATCH, DELETE, COMPLETE, url);

	await FILTER(
		document.querySelectorAll("[data-filter]"),
		url,
		UI,
		PATCH,
		DELETE,
		COMPLETE
	);
	DELETEDITEMS(
		document.querySelector("#deletedItemsBtn"),
	 	UI
	);
}

engine();