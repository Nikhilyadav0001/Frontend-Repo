//loops
//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i + "* 4 " + " = " + i * 4);
}
console.log(" for loop ended")

//while loop
let num = 1;
while (num <= 10) {
    console.log(num + "* 4 " + " = " + num * 4);
    num++;
}
console.log("while loop ended")


//do while loop
let Num = 1;
do {
    console.log(Num + "* 4 " + " = " + Num * 4);
    Num++;
} while (Num <= 10);
console.log("do while loop ended")

//for of  loop

let str = "hello";
for (const ch of str) {
    console.log(ch);
}
console.log("for of loop ended")

//for in  loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in obj) {
    console.log("key:", key, " value:", obj[key]);
}
console.log("for in loop ended")


// string is a immutable sequence of characters used to represent text
let s = "nk";
let ss = 'nkkk';
console.log(s, ss);

console.log(s.length);
console.log(s.charAt(0));
console.log(s[0]);

//template literals
let name = "Aman";
let age = 20;
let specialCharacters = `my name is ${name} and i am ${age} years old`;
console.log(specialCharacters);

console.log("my name is " + name + " and i am " + age + " years old");

// \n for next line \t tab space \b backspace \r return
let sss = "Hello\nWorld\tHow are you?\b";
console.log(sss);

// string methods
console.log(ss.toUpperCase());
console.log(ss.toLowerCase());
console.log(ss.includes("h"));
console.log(ss.startsWith("h"));
console.log(ss.endsWith("k"));
console.log(ss.repeat(3));
console.log(ss.trim());
console.log(ss.trimStart());
console.log(ss.trimEnd());
console.log(ss.slice(0, 2));
console.log(ss.substring(0, 2));
console.log(ss.replace("h", "H"));
console.log(ss.replaceAll("h", "H"));
console.log(ss.split("h"));
console.log(ss.split(""));
console.log(ss.split(" "));
console.log(ss.split("h").length);
console.log(ss.split("h")[0]);


