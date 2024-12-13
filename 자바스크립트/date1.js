// date1.js


// 날짜 객체 생성

const now = new Date(2024, 11, 25);

console.log('now : ', now);

const year = now.getFullYear();
const month = now.getMonth() + 1;   // 1월 : 0 
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const weekday  = now.getDay();

// 2024-12-11  14:49:46+
console.log(`${year}-${month}-${date}  ${hour}:${minute}:${second}`);


const dayofWeeks = [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ];

console.log('weekday : ', weekday);

console.log('weekday : ', dayofWeeks[weekday]);   // 0 : 일요일


 
