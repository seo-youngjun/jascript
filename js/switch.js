// switch.js
let msg = prompt('A,B,C중에 값을 입력하시요: ');
console.log(msg);

switch(msg) {                //범위의 값은 사용이 어렵다.
  case 'A':
    console.log('A를 입력.');
    break;
  case 'B':
    console.log('B를 입력.');  
    break;
  case 'C':
    console.log('C를 입력.');    
    break;
  default:
    console.log('A,B,C중에 입력');  
}


