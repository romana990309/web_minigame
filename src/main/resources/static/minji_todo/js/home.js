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
		if (fortune === "") {
			alert("뽑은 행운이 없습니다. 행운을 뽑아주세요.");
			return;
		}
		localStorage.setItem("myFortune",fortune);
				alert("행운을 저장했어요.");
	}
	function loadFortune(){
		const save = localStorage.getItem("myFortune");
		if(save === null) {
			alert("저장된 값이 없습니다.");
			return;
		}
		fortune = save;
		document.querySelector("#result").textContent=fortune;
		alert("저장된 값을 꺼냈습니다.");
	}
	function delFortune(){
		localStorage.removeItem("myFortune");
		fortune="";
		document.querySelector("#result").textContent="저장된 행운을 삭제했습니다.";
		alert ("삭제 완료");
	}
	
	
	
	