// array2.js


// user defined Object

// 객체 리터럴을 이용한 객체 생성

const member = {
    firstName: 'Julia' ,
    lastName: 'Roberts' ,
    age: 10
}

console.log('member : ', member);
console.log('member dataType : ', typeof member);
console.log('member dataType : ', toString.call(member)); // [object Object]


for (const prop in member) {
    console.log('property : ', prop);
    console.log('value : ', member[prop]);  
  
}

let result = member.age;

console.log('result : ', result);


result = member['age'];

console.log('result : ', result);


member.age = 20;

console.log('result : ', member.age);


member['age'] = 30;

console.log('result : ', member['age']);


console.log('member : ', member);
