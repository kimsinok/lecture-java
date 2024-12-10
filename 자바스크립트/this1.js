
// this1.js

// This binding

function hello(username) {
    console.log('this : ', this);    // Window 객채
    console.log('Hello, ', username);
}



hello('lee');


const sayHello = function(username) {
    console.log('this : ', this);    // Window 객채
    console.log('Hello, ', username);
}

sayHello('hong');


// Arrow Function : ES6
const hi = (username) => {
    console.log('this : ', this);    // Window 객채
    console.log('Hi, ', username);
}


hi('park');



function myFunc(username, func) {   // func : callback function
    console.log('this : ', this);
    func(username);    
}


myFunc('Alice', sayHello);