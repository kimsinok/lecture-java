

//callback2.js
// 콜백 함수 : 함수형 프로그래밍


const colors = [ 'red', 'green', 'blue', 'black', 'yellow' ];

console.log('color : ', colors);

console.log('color dataType : ', typeof colors);

console.log('color dataType : ', toString.call(colors)); //Array

// 콜백 함수
colors.forEach((value, index) => {
    console.log('index : ', index);
    console.log('value : ', value);    
});






