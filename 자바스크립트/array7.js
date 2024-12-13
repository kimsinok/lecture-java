
 // array7.js

 const intarr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];


 const total = intarr.reduce(function(prev, curr, index) {

    console.log(`prev : ${prev}, curr : ${curr}, index : ${index}`);    

    return prev + curr;

 }, 0);


console.log('total : ', total);  // 55


