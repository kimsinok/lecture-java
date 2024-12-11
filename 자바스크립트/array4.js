// array4.js


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


const newMembers = members.map(function(member, index) {

    return {
        fullName: `${member.firstName} ${member.lastName}`,
        age: `${member.age}`
    }


});




newMembers.forEach(function(m, index) {

    console.log(`fullName : ${m.fullName}, age : ${m.age}`);

});