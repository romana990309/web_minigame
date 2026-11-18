const addbutton =document.querySelector("#addbutton");
const input =document.querySelector("#taskInput");

addbutton.addEventListener("click",() =>{
		alert("추가되었습니다.")
	const item = document.createElement("li");
		item.textContent = input.value;
		document.querySelector("#taskList").append(item);
		input.value = "";
});