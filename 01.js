console.log('hello world');
test(10, 20);

function test(a, b) {
    add = a + b;
    console.log(a + b);
}
console.log(Math.pow(8, 1 / 3));

console.log(Math.max(4, 19, 28, 18, 10));
console.log(Math.min(4, 19, 28, 18, 10));
console.log(Math.random());

console.log(Math.cbrt(216));
console.log(Math.hypot(45, 987));

console.log(Math.clz32(0xf));

console.log(4 / 0); //infinity


console.log(Math.trunc(Math.sin(0)));



function area(a) {
    let A = (Math.sqrt(3)) / 4;
    let B = A * Math.pow(a, 2)
    console.log(Math.round(B));
}

area(5);

console.log(Number.isNaN("2"));

console.log(Number.parseInt("5z")); //returns the number if found in starting output is 5 while if
parameter = '5asjj65532sdha2' //then also the output is 5 as there is no vlaue preceeding to 5


let A = 0.3 - 0.2;
let B = 0.2 - 0.1;

console.log(A);
console.log(B);

let googol = "1" + "0".repeat(100);

console.log(BigInt(googol));