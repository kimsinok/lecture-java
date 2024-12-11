// array6.js



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


let flag = members.some(function(m, index) {

    return m.firstName === 'Julia' ? true : false;

});


console.log('flag : ', flag);



flag = members.every(function(m, index) {

    return m.firstName === 'Julia' ? true : false;

});


console.log('flag : ', flag);
