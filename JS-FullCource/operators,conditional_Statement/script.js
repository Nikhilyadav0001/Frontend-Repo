/* this is a multi line comment */

// operators

a = 10;
b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);

console.log(a == b && a > b);
console.log(a == b || a > b);
console.log(!(a == b));

let c = "10";
console.log(a === c); // false
console.log(a == c); // true

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
console.log(a << b);
console.log(a >> b);

// assignment operators

a = 10;

console.log(a += 10);
console.log(a -= 10);
console.log(a *= 10);
console.log(a /= 10);
console.log(a %= 10);
console.log(a **= 10);
console.log(++a);
console.log(--a);
console.log(a++);
console.log(a--);

// conditional statements

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}

let age = 25;

if (age < 18) {
    console.log("junior");
} else if (age >= 18 && age < 60) {
    console.log("middle");
} else {
    console.log("senior");
}

//ternary operator

age >= 18 ? console.log("adult") : console.log("minor");

//switch statement
switch (age) {
    case 18:
        console.log("junior");
        break;
    case 60:
        console.log("senior");
        break;
    default:
        console.log("middle");
}

//mdn docs for documentation


alert('hello');

let name = prompt('enter your name');

console.log(name);

let result = confirm('are you sure?');

console.log(result);


let marks = prompt('enter your marks');
if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else if (marks >= 60) {
    console.log("D");
} else {
    console.log("F");
}
