// booleans

// let score = 'adad';

// if (score === 'adad') {
//     console.log(`great score ${score}`);
// } else {
//     console.log('false value executed');
// }

// This all are treated as false value
// undefined
// null
// 0
// -0
// ""
// NaN

// console.log(typeof(false.toString()));
// console.log(typeof('🤦‍♂️'));

/* 
null is obejct type and a LANGUAGE KEYWORD
UNDEFIENED is a  PREDEFIENED GLOBAL CONSTANT
null and undefined both defines the absence of value 
but null suggests that there is a object which is empty 
while the undefined goes deep down and look for that if it has any value isnide it */

// symbols

let s1 = Symbol('p1');
let s12 = Symbol('p1');

console.log(s1 == s12);
if (s1 == s12) {
    console.log('priority same');
} else {
    console.log('not same');
}

// symbols give a unique code value to the constant so that it can never get repeated

const win = Symbol("window");
const aile = Symbol("aile");
const mid = Symbol("mid");

const crew = Symbol("window");


function getseat(getvalue) {
    switch (getvalue) {
        case win:
            return 'sit alloted1';
        case aile:
            return 'sit alloted2';
        case mid:
            return 'sit alloted3';
        default:
            console.log('sit not alloted');
    }
}


// console.log(getseat(crew));

// global objects

// Constants like: undefined, NaN
// Function like: isNaN(), parseInt(), eval()
// constructor like : Date(),String(),Object()

// global objects are not reserved keywords while NULL is a reserved keyword
// BUT to avoid errors we should always use global objectes as the reserved keywords

/* 
global object
for browser is window
while in node its node */

// console.log(this);
// console.log(globalThis);