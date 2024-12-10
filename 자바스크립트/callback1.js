// callback1.js

// 콜백 함수

function hello(username, callback) {    

    console.log('callback : ', callback);
    

    callback(username);    
}


function consoleHello(username) {
    console.log('Hello, ', username);
}

function alertHello(username) {
    alert('Hello, ' + username)
}



// 함수 호출

// console.log('alertHello : ', alertHello);

hello('kim', alertHello);

