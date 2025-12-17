// operator.js
console.log('hhhhhhhhhhhhhh');

let result = 10 > 5;
result =10 == 11;

let num1 = 10;  // 숫자.
let num2 = 25;
let str1 = '10';  // 문자.
str1 = 10;

result = num1 >= num2;
result = num1 === str1; // 값도 데이터타입도 비교.
result = num1 != num2;  // 다르다.

// 논리연산자.
result = num1 > num2 || num1 == str1;  // ||는 or 연산자임.
result = num1 > num2 && num1 == str1;  // &&은 AND 연산자임.
result = !(num1 > num2 && num1 == str1);  // !은 NOT 연산자임.
result = !result;
result = !result;

console.log(result);
console.log('a' > 'A');
console.log('a' .charCodeAt(0));
console.log('A' .charCodeAt(0));
console.log('가' .charCodeAt(0));
console.log('#fff' .charCodeAt(0));
console.log('#000' .charCodeAt(0));