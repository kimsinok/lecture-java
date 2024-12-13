// es8.js
// Spread Operator

//1. 함수 호출

const add = (x, y, z=0) => {
    
    console.log(`x : ${x}, y : ${y}, z : ${z}`);
    
    return x + y + z;
}



const intarr = [1, 2];

// console.log('result : ', add(...intarr));  // 6



//2. 객체 복사

const user = {
    username: 'lee',
    age: 10
}


const copy = user;

console.log('user : ', user);
console.log('copy : ', copy);

user.age = 20;
// user['age'] = 20;

console.log('copy : ', copy);
console.log('user : ', user);

console.log(user === copy);  //true


//3. 객체 복제(clone)

const clone = {...user};


console.log(user === clone);  //false


console.log('clone : ', clone);
console.log('user : ', user);

clone['username'] = 'kim';

console.log('user.username : ', user.username);
console.log('clone.username : ', clone['username']);


// 4. 객체 병합

const member = {
    id: 'javascript',
    pwd : '1234'
}



const person = {...member, ...user};

console.log('person : ', person); //{id: 'javascript', pwd: '1234', username: 'lee', age: 20}

console.log(`id : ${person.id}`);
console.log(`username : ${person['username']}`);


