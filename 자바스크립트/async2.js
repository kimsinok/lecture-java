// async1.js
// 비동기식 프로그래밍 방식


console.log('first job');


setTimeout(() => {    
    // 비동기 작업
    for (let i = 1; i <= 10000; i++) {
        console.log('second job');
    }

}, 1000); // 1초


console.log('third job');  // 논블록킹
