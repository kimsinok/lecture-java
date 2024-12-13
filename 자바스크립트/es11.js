// es11.js
//Object Destructuring ( 객체 구조 분해 )

const user = {
    id: 'javascript',
    pwd: '1234'
}

//const {id, pwd} = user;

//console.log(`id : ${id}, pwd : ${pwd}`);

const {id} = user;

console.log(`id : ${id}`);

const {pwd} = user;

console.log(`pwd : ${pwd}`);


// 함수 
function userId({id}) {
    console.log(`id : ${id}`);
}


userId(user);


const person = { 
    userid: 'java', 
    displayName: 'jode', 
    fullName: { 
        firstName: 'John', 
        lastName: 'Doe' 
    } 
};

console.log(`lastName : ${person.fullName.lastName}`); // lastName : Doe

const {userid, fullName: {lastName}} = person;

//console.log(`userid: ${userid}, lastName : ${lastName}`);// userid: java, lastName : Doe


const persons = [

    { 
        userid: 'java1', 
        displayName: 'jode1', 
        fullName: { 
            firstName: 'John1', 
            lastName: 'Doe1' 
        } 
    },

    { 
        userid: 'java2', 
        displayName: 'jode2', 
        fullName: { 
            firstName: 'John2', 
            lastName: 'Doe2' 
        } 
    }

];



for (const {userid: id, fullName: {lastName: name}} of persons) {
    console.log(`userid : ${id}, lastName: ${name}`);
}