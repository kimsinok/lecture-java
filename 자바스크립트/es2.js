// es1.js
// Rest Parameter 


function sum(...args) {

    // console.log('args : ', args); // (2) [1, 2]
    // console.log('args dataType : ', typeof args);
    // console.log('args dataType : ', toString.call(args)); // Array
    // reduce

    return args.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);

}



console.log(sum(1, 2));

console.log(sum(1, 2, 3));