/**
 * 점수를 저장할 변수 score 선언
 * 현재 변수에 10점을 올리는 addTenPoint() 함수 정의
 * 실제 addTenPoint() 함수 두번실행
 */

let score = 0;
function addTenPoint(){
	score = score +10;
	console.log("현재 함수: "+score);
}
addTenPoint();
addTenPoint();
const startButton =document.querySelector("#startButton");
function startGame(){
	// 메시지 창을 띄웁니다. 그 창을 닫아야 다음 행동 가능 (모달 대화창)
	alert("게임시작 버튼을 눌렀어요 게임을 시작하지");
}
// 이벤트를 감시하는 감시 대행을 등록
// 태그.addEventListener("이벤트명",이벤트 핸들러명);
startButton.addEventListener("click",startGame);
const stopButton =document.querySelector("#stopButton");
function stopGame(){
	alert("게임 종료버튼을 누르셨습니다. 게임을 종료합니다.");
}
stopButton.addEventListener("click",stopGame);
const greeting = document.querySelector("#greeting");
const message = document.querySelector("#message");
const copyButton = document.querySelector("#copyButton");

function copy(){
	message.textContent = greeting.value;
	alert("인사말: " + message.textContent);
}
copyButton.addEventListener("click",copy);
