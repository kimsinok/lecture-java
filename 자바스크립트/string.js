// string.js

// 내장 객체 - String


let str = 'Hello, ';

console.log(`str : ${str}`);

console.log(`str datatype : ${typeof str}`);

console.log(`str datatype : ${toString.call(str)}`); //[object String]

console.log(`str 문자열의 길이 : ${str.length}`);

let result = str.concat('JavaScript'); // 문자열 결합

// Hello, Javascript
console.log(`result : ${result}`);

console.log(result.indexOf('j')); // -1

console.log(result.lastIndexOf('a'));  // 10

console.log(result.slice(0, 5));

console.log(result.substring(0, 5));

console.log(result.slice(7));

console.log(result.substring(7));

console.log(result.substring(-1, 5));

console.log(result.slice(-10, -6));

console.log(result.slice(-1));


const date = '2024-12-10';

const array = date.split('-');

console.log(`year : ${array[0]}년`);
console.log(`month : ${array[1]}월`);
console.log(`date : ${array[2]}일`);


const temp = 'Hello';

console.log('upper case : ', temp.toUpperCase());

console.log('lower case : ', temp.toLowerCase());


console.log(temp.padStart(10, '*'));

console.log(temp.padEnd(10, '*'));


const temp1 = ' Hello  ';

console.log(temp1.trim());

console.log(temp1.trim().length);