let dollar = '🤦‍♂️';
let love = '\u2665';

console.log(dollar.length); //5 coz its a unicode character
console.log(love.length); //1 treating it as a single character coz of \u

let lorem = `+91 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi \n repudiandae ""consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit \t fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. +91`;

console.log(lorem.substring(2, 11)); //'1 Lorem ' but this don't work in negative condition as slice
console.log(lorem.slice(-10)); //work same as substring 'autem. +91'


console.log(lorem.indexOf('i')); //10
console.log(lorem.length); //385
console.log(lorem.indexOf('i', 10)); //10
console.log(lorem.lastIndexOf('i')); //286

console.log(lorem.startsWith("+91")); //true
console.log(lorem.endsWith("+91")); //true


console.log(lorem.includes("\"")); //true

// console.log(lorem.toLowerCase())

console.log(lorem.normalize());
let string1 = '\u00F1';
let string2 = '\u006E\u0303';

console.log(string1.length); //  ñ
console.log(string2.length); //  ñ */

string1 = string1.normalize('NFC');
string2 = string2.normalize('NFC');

console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2 */


let lorem2 = "AXIS1234816217217";
console.log(lorem2.padStart(20, "0")); //pad start fits the zero at starting if the string is not of required lenght i.e here it is 20
console.log("*".repeat(10));

let score = 100
let greeting = `${dollar} is at value of ${score} \u2718`;
console.log(greeting);

let mynewstring = String.raw `\u2178`; //treats value as a string and return it as it is ignoring the  \u

console.log(mynewstring);