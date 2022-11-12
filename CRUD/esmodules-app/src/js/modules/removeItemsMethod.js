export default function (deletedItemsBtn, UI) {
	deletedItemsBtn.addEventListener("click", async () => {

		UI.deletedItems.innerHTML = "";

		await fetch("http://localhost:8888/history")
			.then(data => data.json())
			.then(data => data.forEach(obj => {
				UI.DeletedItems(obj.id, obj.title);
			}));
	})
};



