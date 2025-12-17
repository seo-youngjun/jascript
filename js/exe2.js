// exe2.js
// 가위바위보 게임.
// 1(가위), 2(바위), 3(보)
// 시스템 : 1~3, 사용자 : 1~3
// You Win!!! / You Lost!!! / Both Same~~ 구문을 출력.

let x = Math.floor(Math.random() * 3) + 1;
console.log(x)
if(x==1) {
  console.log('가위');
} else if(x==2){
  console.log('바위')
} else if(x==3){
  console.log('보')
} else {
  console.log('에러~~')
}    
let msg = prompt('1,2,3중에 값을 입력하시요: ');
console.log(msg);
if(msg==1) {
  console.log('가위');
} else if(msg==2){
  console.log('바위')
} else if(msg==3){
  console.log('보')
} else {
  console.log('에러~~')
}    
if (x == msg) {
  console.log('Both Same~~');
} else if (x == 1 && msg == 2){
  console.log("You Win!!!");
} else if (x == 1 && msg == 3){
  console.log("You Lost!!!");
} else if (x == 2 && msg == 1){
  console.log("You Lost!!!");
} else if (x == 2 && msg == 3){
  console.log("You Win!!!");
} else if (x == 3 && msg == 1){
  console.log("You Win!!!");
} else if (x == 3 && msg == 2){
  console.log("You Lost!!!");
} else {
  console.log("Both Same~~ ");
}