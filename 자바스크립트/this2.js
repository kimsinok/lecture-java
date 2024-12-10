// this2.js

const member1 = {
    id: 'java',
    pwd: '1111'
}

const member2 = {
    id: 'javascript',
    pwd: '2222'
}



const update = function(id, pwd) {
    this.id = id;
    this.pwd = pwd;
}


const whatIsThis = function() {
    console.log('this : ', this);    
}

// whatIsThis.call(member1);

// watIsThis.apply(member2);

console.log(member1);

// update.apply(member1, ['react', '1234']);
// update.call(member1, 'react', '1234');

const modify = udpate.bind(member1);

/*
const modify = function(id, pwd) {
    member1.id = id;
    member1.pwd = pwd;
}
*/

modify('spring', '1234');

console.log(member1);

