// event is change in the state of an object
// events are fired to notify of "something happened" that may affect code execution.

//js will get priorty and if we override it in js then js will execute and override previous event
const btn1 = document.querySelector('button');
btn1.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type) // type of the event
    console.log(evt.target) // target of the event
    console.log("button clicked");
    let a = 10;
    console.log(a)
};

btn1.addEventListener('click', () => {
    console.log("button clicked from event listener");
});
btn1.addEventListener('click', () => {
    console.log("button clicked from event listener 2");
    alert("button clicked from event listener 2");
});
btn1.addEventListener('click', () => {
    console.log("button clicked from event listener 3");
});

btn1.removeEventListener('click', () => {
    console.log("button clicked from event listener 3");
});
