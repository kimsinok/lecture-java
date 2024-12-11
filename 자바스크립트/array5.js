
// array5.js



const members = [ 
    { 
        firstName: "Julia", 
        lastName: 'Roberts', 
        age: 10
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



const newMembers = members.filter(function(m, index) {

    return m.age >= 20 ? true : false;


});


newMembers.forEach(function(m, index) {
    console.log(`firstName : ${m.firstName}, lastName : ${m.lastName}, age: ${m.age}`);
    
});



