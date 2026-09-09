//arrays are continious memory location(collection) for storing elements 
//it is a object type in js
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[2]);

// Methods of arrays

// 1. push(): Adds an element to the end of the array
arr.push(6);
console.log("push(6):", arr); // [1, 2, 3, 4, 5, 6]

// 2. pop(): Removes the last element from the array
let lastElement = arr.pop();
console.log("pop():", lastElement, "| remaining arr:", arr); // 6 | [1, 2, 3, 4, 5]

// 3. unshift(): Adds an element to the beginning of the array
arr.unshift(0);
console.log("unshift(0):", arr); // [0, 1, 2, 3, 4, 5]

// 4. shift(): Removes the first element from the array
let firstElement = arr.shift();
console.log("shift():", firstElement, "| remaining arr:", arr); // 0 | [1, 2, 3, 4, 5]

// 5. splice(): Adds/removes elements at a specific index
// splice(startIndex, deleteCount, itemToInsert)
arr.splice(2, 1, 99); 
console.log("splice(2, 1, 99):", arr); // [1, 2, 99, 4, 5]

// Resetting array
arr = [1, 2, 3, 4, 5];

// 6. indexOf(): Finds the index of an element
console.log("indexOf(3):", arr.indexOf(3)); // 2

// 7. includes(): Checks if an element exists in the array
console.log("includes(4):", arr.includes(4)); // true

// 8. find(): Finds the first element satisfying a condition
let found = arr.find(num => num > 3);
console.log("find(num > 3):", found); // 4

// 9. filter(): Returns a new array with elements matching a condition
let evens = arr.filter(num => num % 2 === 0);
console.log("filter(even numbers):", evens); // [2, 4]

// 10. map(): Transforms each element into a new array
let doubled = arr.map(num => num * 2);
console.log("map(num * 2):", doubled); // [2, 4, 6, 8, 10]

// 11. forEach(): Iterates through each element
console.log("forEach iteration:");
arr.forEach(num => console.log("Item:", num));

// 12. reduce(): Aggregates all array values into a single value
let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log("reduce(sum):", sum); // 15

// 13. slice(): Extracts a portion of an array (non-mutating)
let subArray = arr.slice(1, 4);
console.log("slice(1, 4):", subArray); // [2, 3, 4]

// 14. concat(): Combines arrays
let extra = [6, 7, 8];
let combined = arr.concat(extra);
console.log("concat():", combined); // [1, 2, 3, 4, 5, 6, 7, 8]

// 15. join(): Converts array elements into a string
console.log("join(' - '):", arr.join(" - ")); // "1 - 2 - 3 - 4 - 5"

// 16. reverse(): Reverses the order of elements
let reversed = [...arr].reverse();
console.log("reverse():", reversed); // [5, 4, 3, 2, 1]
