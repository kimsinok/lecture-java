
const users = [

    {
        "name":  "lee",
        "age": 10,
        "email": "java1@gmail.com"
    }
    ,
    {
        "name":  "park",
        "age": 20,
        "email": "java2@gmail.com"
    }
    ,
    {
        "name":  "kim",
        "age": 30,
        "email": "java3@gmail.com"
    }


];


// for (const user of users) {

//     console.log('email : ', user.email);
    
// }


console.log('users datatype : ', typeof users);
console.log('users datatype : ', toString.call(users));



const jsonStr = JSON.stringify(users);

console.log('jsonStr : ', jsonStr);

console.log('jsonStr : ', typeof jsonStr);  // string
console.log('jsonStr : ',  toString.call(jsonStr));  // String


const jsonObject = JSON.parse(jsonStr);

console.log('jsonObject[0].email : ', jsonObject[0].email);  // java1@gmail.com

