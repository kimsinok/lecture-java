
 // function1.js

 // 함수 선언문
 function sayHello(username) {
    
    return 'Hello, ' + username;
        
 }



 //함수 호출

 console.log(sayHello('kso'));  // Hello, kso
 

 // 함수 표현식 

const hello = function(username) {
    return 'Hello, ' + username;
}


console.log(hello('lee'));  // Hello, lee

console.log('hello : ', hello);

console.log('hello dataType : ', typeof hello);





