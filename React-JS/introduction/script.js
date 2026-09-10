let h1 = document.createElement("h1")
h1.innerText = "Hello World"
console.log(h1)
document.body.appendChild(h1)
document.body.style.backgroundColor = "black"

//default import export use can use any name
import array from "./app.js"
console.log(array)

//named export
import { a, b, c } from "./app.js"
console.log(a, b, c);

//virtual dom is a copy of real dom
//react create virtual dom and compare it with real dom
//if there is any change in virtual dom, then react update the real dom
//this is the working of react

//jsx (javascript xml) allows to write html in javascript
//const heading = <h1>Hello World</h1>
//console.log(heading)

//function call create react element
// function Heading() {
//     return <h1>Hello World</h1>
// }
// Heading()
//<Heading/>
