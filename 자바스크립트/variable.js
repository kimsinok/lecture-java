

// 변수

// var username = 'Alice';

// console.log('username : ', username);

// console.log('datatype : ', typeof username);  //string

// console.log('datatype : ', toString.call(username));  //[object String]

// console.log('datatype : ', Object.prototype.toString.call(username));  //[object String]




// var nickname = 'Ace';

// var nickname = 'Angel';


// console.log('nickname : ', nickname);  // Angel



// let nickname = 'Ace';

// nickname = 'Angel';


// console.log('nickname : ', nickname);  // Angel


// 상수
// const PI = 3.141592;

// // PI = 3.14;  //error

// console.log('PI : ', PI);
// console.log('datatype : ', typeof PI); // number

// 자료형

let isMarried = false;
let uesrname = 'Alice';
let age = 30;

console.log('isMarried : ' , isMarried);
//console.log('username : ' , username);
console.log('age : ' , age);


// datatype 
console.log('isMarried : ' , typeof isMarried);  // boolean
console.log('username : ' , typeof uesrname);    // string
console.log('age : ' , typeof age);   // number


let nickname;

console.log('nickname : ' , nickname); // undefined
console.log('nickname datatype : ' , typeof nickname); // undefined


let obj = null;

console.log('nickname : ' , obj); // null
console.log('nickname datatype : ' , typeof obj); // object


// 참조형
// object expression

let member = {
    id: 'js',
    pwd: '1234'
}

console.log('member : ', member);
console.log('member.id : ', member.id);
console.log('member.id : ', member['id'])
console.log('member : ', typeof member);

// array
let colors = ['red', 'green', 'blue'];

console.log('colors : ', colors);
console.log('colors datatype : ', typeof colors);  // object
console.log('colors[0] : ', colors[0]);


const hello = function(username) {
    console.log('Hello, ', username);
}


console.log('hello : ', hello);

console.log('hello datatype : ', typeof hello); // function 

hello('kso');
