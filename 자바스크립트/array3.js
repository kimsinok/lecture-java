

const members = [ 
    { 
        firstName: "Julia", 
        lastName: 'Roberts', 
        age: 20
    } , 
    { 
        firstName: "Brad", 
        lastName: 'Pit',
        age: 20 
    }, 
    { 
        firstName: "Leonardo", 
        lastName: 'Dicaprio', 
        age: 30 
    } 
];


const obj = members[1];

console.log(members[1] == obj);
console.log(members[1] === obj);

console.log('obj.age : ', obj.age);
console.log("obj['age'] : ", obj['age']);


console.log("members[1]['age'] : ", members[1]['age']);
console.log('members[1].age : ', members[1].age);


// members.forEach(function(member) {

//     //console.log(`firstName : ${member.firstName}, lastName : ${member.lastName}, age: ${member.age}`); 
//     console.log(`firstName : ${member['firstName']}, lastName : ${member['lastName']}, age: ${member['age']}`); 
    
// });



members.forEach(function(member, index) {

    if (index  == 0) {
        console.log(`firstName : ${member['firstName']}, lastName : ${member['lastName']}, age: ${member['age']}`);     
    }     
    
    
});