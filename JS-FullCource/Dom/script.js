//alert("Hello from Nikhil")
console.log(document.title)

/* window object represents an open window in an browser, it is browser's not js
and is automaticly created when page loads , it is a global object by browser*/

//window.console.log("global object hello");
//window.alert("hello from window");

console.log(window.document);
//console.log(document);

/* Dom Document object model 
when a web page is loaded, browser creates object  of the page ,
this object is called Document Object Model(DOM)(html model)

window -> document-> html -> head & body
*/

document.body.style.backgroundColor = "#222";

let h11 = document.getElementById("heading1");
console.dir(h11);
console.log(h11);

let h1 = document.getElementsByClassName("heading");
console.dir(h1);
console.log(h1);

let p = document.getElementsByTagName("p");
console.dir(p);
console.log(p);

//first element
let element = document.querySelector(".heading");
console.dir(element);
console.log(element);

//all element
let allElements = document.querySelectorAll(".heading");
console.dir(allElements);
console.log(allElements);

console.log("-------------------------------------------")

//tag name of element
console.log(document.body.tagName)
//only text in element
console.log(document.body.innerText)
//all text with html
console.log(document.body.innerHTML)
//text in node even hidden one (includes whitespace) 
console.log(document.body.textContent)

//children of document
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
console.log(document.body.children)

document.getElementById("p2").innerText += " hello this is the 2nd paragraph";

let head1 = document.querySelector("#heading1");
let id = head1.getAttribute("id");
console.log(id);

head1.setAttribute("abc", "abcdertyuioop");
let class1 = head1.getAttribute("abc");
console.log(class1);

head1.style.color = "red";
//head1.style.visibility = "hidden";

let newBtn = document.createElement("button");
newBtn.innerText = "plzz click me";
console.log(newBtn);

//append after but inside heading 1.
head1.append(newBtn)

//add before head1
//head1.before(newBtn)

//add at start of head1
//head1.prepend(newBtn)

//replace head1
//head1.replaceWith(newBtn)

//remove node
newBtn.remove()

