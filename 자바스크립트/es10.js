// es10.js
// Array Destructuring  (배열 구조 분해 할당)



const colors = ['red' ,'green' , 'blue'];

const [x, y, z] = colors;

console.log(`x: ${x}, y: ${y}, z: ${z}`); // x: red, y: green, z: blue


const [x1, y2] = colors;

console.log(`x1: ${x1}, y2: ${y2}`); // x1: red, y1: green,

const [, y3, ] = colors;

console.log(`y3: ${y3}`); // y1: green


const myFun = () => {  
    return [1, 2]; // Array
}


const [a, b] = myFun(); // [1, 2]

console.log(`a : ${a}, b : ${b}`); // a : 1, b : 2


