let score=0;


	const scoreElement =document.querySelector("#score");
	const cliclButton =document.querySelector("#cliclButton");
	const messageElement =document.querySelector("#message");
	const resetButton =document.querySelector("#resetButton");
	
	function addScore(){
		score = score +1;
		scoreElement.textContent=score;
		messageElement.textContent="좋아요 한점 얻었습니다.";
	}
	function resetScore(){
		score = 0;
		scoreElement.textContent=score;
		messageElement.textContent="점수가 리셋되었습니다.";
	}
	
		cliclButton.addEventListener("click",addScore);
		resetButton.addEventListener("click",resetScore);