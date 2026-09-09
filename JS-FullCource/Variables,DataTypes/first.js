// print into console 
console.log("Nikhil here");

// its is dynamic type langauge  

// variables - these are containers that store values

// there are three types of variables:
// var - it is a function-scoped or globally-scoped,can be redeclared and reassign
// let - it is a block-scoped,can be redeclared but reassign
// const - it is a block-scoped,can't be redeclared but reassign

var name = "Nikhil";
var name = "yadav ";
console.log(name);

let num = 10;
//let num = 20;
num = 40;
console.log(num);

const pi = 3.14;
//pi = 3.145;
//const pi = 3.1415;
console.log(pi);

//Data Types - it is a type of data that can be stored in a variable
// number 
let a = 10.3;
// string
let b = "nikhil";
// boolean
let c = true;
// null
let d = null;
// undefined
let e = undefined;
// object it is non primitive
const f = { name: "Nikhil", age: 20, city: "Gurugram" };
// symbol
let g = Symbol("Nikhil");
// bigint BigInt("1234567890123456789012345678901234567890")
let h = 1234567890123456789012345678901234567890n;

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);
console.log(d);
console.log(typeof d);
console.log(e);
console.log(typeof e);
console.log(f);
console.log(f.name);
console.log(f["age"]);
console.log(f.city);
console.log(typeof f);
console.log(g);
console.log(typeof g);
console.log(h);
console.log(typeof h);

const Nikhil = { name: "nikhil", age: 20, city: "gurugram" }
console.log(Nikhil);

