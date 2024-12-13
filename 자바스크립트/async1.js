// async1.js
// 동기식 프로그래밍 방식

console.log('first job');


for (let i = 1; i <= 3; i++) {
    console.log('second ob' + i);
}

console.log('third job');  // 블록킹 (대기)
