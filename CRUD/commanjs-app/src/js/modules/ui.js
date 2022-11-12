const root = document.querySelector("#root");

module.exports = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),
	filterDiv: document.createElement("div"),
	completeBtn: document.createElement("button"),
	noCompleteBtn: document.createElement("button"),
	allBtn: document.createElement("button"),

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application",
		this.completeBtn.textContent = "Completed Tasks";
		this.noCompleteBtn.textContent = "No Completed Tasks";
		this.allBtn.textContent = "All Tasks";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.classList.add("fa", "fa-plus-circle");
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
		this.filterDiv.id = "filterDiv";
		this.completeBtn.id = "completeTasks";
		this.allBtn.id = "allTasks";
		this.noCompleteBtn.id = "noCompleteTasks";
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form, this.listsBlock, this.filterDiv);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
		this.filterDiv.append(this.allBtn, this.completeBtn, this.noCompleteBtn);
	},

	toHTML(id, value, state = false) {
		this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<span>${id}</span>
					<input type="text" value="${value}" readonly>
				</div>
				<div class="buttons">
					<input type="checkbox" name="item${id}" ${state ? "checked" : ""}>
					<button class="removeBtn fa fa-trash"></button>
					<button class="editBtn fa fa-pencil"></button>
					<button class="saveBtn fa fa-save"></button>
				</div>
			</div>
		`;
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
};

