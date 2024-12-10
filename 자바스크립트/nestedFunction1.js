
// nestedFunction.js

// 중첩 함수 선언

function outer() {

    const username = 'Alice';

    // 내부 함수
    function inner() {
        console.log('Hello, ', username);        
    }

    return inner;  // 함수 리턴

}


// 함수 호출

const innerFunc = outer();
//console.log('innerFunc : ', innerFunc);
// console.log('innerFunc dataType : ', typeof innerFunc);
innerFunc();

// outer()();






