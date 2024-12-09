
// falsy.js


// falsy와 truthy

let temp = NaN;   // false, undefined, null, '', 0 , NaN(Not a number)

if (temp) {  // falsy 값    
    console.log('true');    
} else {
    console.log('false');
}


let temp1 = 'abc';  // 1, true, 'abc'

if (temp1) {  // truthy 값    
    console.log('true');    
} else {
    console.log('false');
}