const addbutton =document.querySelector("#addbutton");
const input =document.querySelector("#taskInput");

addbutton.addEventListener("click",() =>{
	if (input.value.trim()===""){
			alert("값을 입력해 주세요.")
	}else{
			alert("추가되었습니다.")
		const item = document.createElement("li");
			item.textContent = input.value;
			document.querySelector("#taskList").append(item);
				item.addEventListener("click",()=>{
				item.style.textDecoration = "line-through";})
			input.value = "";
	}
});	
	const fortunes = [
		"연애운","금전운","행운","직장운","학업운"
	];
	let fortune = "";
	function drawFortune(){
		const index =  Math.floor(Math.random()*fortunes.length);//난수 만들기
		fortune = fortunes[index];
		document.querySelector("#result").textContent=fortune;
	}
	function saveFortune(){
		
	}
	function loadFortune(){
		
	}
	function delFortune(){
		
	}