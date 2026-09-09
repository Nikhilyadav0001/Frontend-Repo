//functions in js 

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

function hello() {
    console.log("Hello World");
}

hello();

//arrow functions

const sum1 = (a, b) => a + b;

console.log(sum1(1, 2));

const hello1 = () => console.log("Hello World");

hello1();

//arrow functions with multi-line block

const sum2 = (a, b) => {
    console.log(a + b);
}

sum2(1, 2);

//functions as expressions

const sum3 = function (a, b) {
    return a + b;
}

console.log(sum3(1, 2));

//count vowels in a string

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));

//methods are functions binded to a object like string
//foreach method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function (arr) {
    console.log(arr);
});

//double each element .for each(value,index,array)
arr.forEach((arr) => console.log(arr * 2));

// higher order function/methods are these function that take or return functions
//foreach is a higher order method

//map method it is same as for each just it return a new array
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1.map(function (arr) {
    return arr * 3;
}));

// double each element
console.log(arr1.map((arr) => arr * 2));

//filter method creates new arryes if given condition is true
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (arr) {
    return arr % 2 === 0;
});

//filter even numbers
arr2.filter((arr) => console.log(arr % 2 === 0));

//reduce function it reduces an array to a single value
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.reduce(function (acc, curr) {
    return acc + curr;
}));

//reduce arrow function it is same as reduce function just it is in arrow function
console.log(arr3.reduce((acc, curr) => acc + curr));


