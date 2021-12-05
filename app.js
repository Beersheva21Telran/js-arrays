const array1 = [1, 2, 3, -10, 9];
// const array = array1;
// array[0] = 80;
// console.log(array1[0]);
// const array2 = array1.sort(); //no comparator - sorting of strings
// console.log("array sorted");
// console.log(array2);
//adds to end
console.log(array1.push(40));
const array2 = [10, 15];
array1.push(array2);
//console.log(array1);
//array2.push(array2);
//console.log(array2) //circulation
//using spread operator
array1.push(...array2);
console.log(array1);
/*********************************** */
//adds at beginning
array1.unshift(-100);
//concat
//console.log(array1.concat(array2));
//console.log(array1 + array2); concatination of the strings
/************************************************************** */
//join 
//console.log(array1.join(':'))
/***************************************************************** */
//inserts at middle
array1.splice(4,0,'Hello');
console.log(array1)



