// array1.js


// 배열 리터럴을 이용하여 배열 생성

const colors = ['red', 'green', 'blue', 'purple', 'gray'];

console.log('colors : ', colors);

console.log('colors datatype : ', typeof colors);

console.log('colors datatype : ', toString.call(colors));

console.log('length : ', colors.length);


// 1. 배열 요소의 내용 출력

// for (let i = 0; i < colors.length; i++) {

//     console.log(colors[i]);
    
// }


// 2. 배열 요소의 내용 출력

for (const e of colors) {

    console.log(e);

}


console.log(colors.join()); // red,green,blue,purple,gray


// 1. 배열의 마지막 요소를 제거
colors.pop();

console.log(colors.join()); // red,green,blue,purple


// 2. 배열의 첫번째 요소를 제거
colors.shift();

console.log(colors.join()); // green,blue,purple


// 3. 배열의 마지막에 요소를 추가
colors.push('yellow');

console.log(colors.join()); // green,blue,purple,yellow

// 4. 배열의 맨앞에 요소를 추가
colors.unshift('pink');

console.log(colors.join()); // pink,green,blue,purple,yellow

//5. 배열 요소의 내용을 오름차순 정렬

console.log(colors.sort().join()); //blue,green,pink,purple,yellow


//6. 배열 요소의 내용을 내림차순 정렬
console.log(colors.sort().reverse().join()); //yellow,purple,pink,green,blue

// ['yellow', 'purple', 'pink', 'green', 'blue']
console.log('colors : ', colors);

let index = colors.indexOf('green');

console.log('index : ', index); // 3

// ['yellow', 'purple', 'pink', 'green', 'blue', 'green']
colors.push('green');

index = colors.lastIndexOf('green');

console.log('index : ', index); // 5


 // ['yellow', 'purple', 'pink', 'green', 'blue', 'green']

console.log(colors.join());

colors.splice(2, 2);

// ['yellow', 'purple', 'blue', 'green']
console.log(colors.join());

colors.splice(2, 0, 'pink', 'black');

// ['yellow', 'purple', 'pink', 'black', 'blue', 'green']

console.log(colors.join());

colors.splice(0);

console.log(colors.length);


const intarr = [ 1, 2, 3, 4, 5 ];

console.log('intarr : ', intarr.join());  // 1,2,3,4,5

const array = intarr.slice(2, 4); // [3, 4]

console.log('array : ', array);

console.log('intarr : ', intarr);

