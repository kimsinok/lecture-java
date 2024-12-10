
//function2.js

// 함수 선언문

function add(a, b) {
    return a + b;
}



console.log('add : ', add);

console.log('add dataType : ', typeof add);
 

const func = add;

console.log('func : ', func);

console.log('func dataType : ', typeof func);

 
console.log(add == func);  // true

console.log(add === func); // true


console.log(add(1, 2));

console.log(func(1, 2));