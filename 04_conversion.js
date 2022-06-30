//  primitive -- basic building blocks or smallest unit in any language 
// undefiened,null,string,numbers :: Can't be changed

let name = "TesTER";

console.log(name.toLowerCase()); // it returns the new string it has nothing to do with the prior one

//  objects are mutable (can be changed)

let myObj = { name: "tetsre" };
console.log(myObj.name = "tester2"); //name will bechnage dto tester2

//  arrays are mutable (can be changed)

let score = [30, 98, 678, 718];
console.log(score); //[30, 98, 678, 718]
console.log(score[2] = 54); //54
console.log(score); //[30, 98, 54, 718]

//  objects are called as refrence type
//  which means refrenece is assigned


let NewArray = [3, 4];
let AnotherArray = NewArray; //refrence of NewArray is passed not the whole array is copeied
AnotherArray[1] = "tets";
console.log(NewArray === AnotherArray); //true they are same as values are assigned

let yetArray = Array.from(NewArray); // but this method ensures that the whole copy of array ios passed
console.log(yetArray === NewArray); //false

//  type conversions
//  js get what js wants

console.log(10 + "object"); //10object concatination occurs
console.log("7" * "4"); //28
let no = 1 - 'x'; //NaN
console.log(no + " object"); //NaN object

// true is converted to 1
// flase is converted to 0

// forceful conversion

Number("3");
let stocks = 1600.72782;

console.log(stocks.toFixed(2)); //1600.73

console.log(Boolean("")); //false 
console.log(Boolean([99])); // true


// objects to primitive values(boolean ,number)
//  1)= Prefer-String  //[]=>try to convert string
//  2)= Prefer-Number  =>valueof() =>toString()
//  3)= No-Preferences

let colorValue = 14;
let binarycolorValue = colorValue.toString(2); //Conerts 14 to binary value as per base 2 value 
console.log(binarycolorValue); // 1110 ==[8+4+2+0]==14

console.log({ 1: "one" }.toString()); //[object Object]
// Tostring method can't convert this object into string itselt that's why it returns object object


let newdate = new Date(2022, 1, 1);
console.log(newdate); //2022-01-31T18:30:00.000Z
console.log(newdate.valueOf()); //1643653800000