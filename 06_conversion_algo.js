// type conversions
// js get what js wants

// console.log(10 + "object"); //10object concatination occurs
// console.log("7" * "4"); //28
// let no = 1 - 'x';
// console.log(no + " object"); //NaN object

console.log(Number("3")); //3 as a number
console.log(Number("3x")); //NaN
console.log(Number("")); //0 empty array is converted into 0
console.log(Number([99, 88])); //0 empty array is converted into 0  ----- but if value is inside array then value is returnedsuch as 99



// objects to primitive values(boolean ,number)
//  1)= Prefer-String  //[]=>try to convert string
//  2)= Prefer-Number  =>valueof() =>toString()
//  3)= No-Preferences



/* 
whenver we try to convert a value to PRIMITVE data types first it goes with toString then it tries valurOf function to return the output 
*/