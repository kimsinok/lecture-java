// es5.js

// 프로퍼티 초기화 단축 (Property Initializer Shorthand)


const createUser = (username, age) => {
    return {
        username,
        age
    }    
}


// 함수 호출 
const  user = createUser('lee', 10);

console.log('user : ', user);

console.log(`usermame : `, user['username']);
console.log(`age : `, user['age']);

console.log(`usermame : `, user.username);
console.log(`age : `, user.age);
