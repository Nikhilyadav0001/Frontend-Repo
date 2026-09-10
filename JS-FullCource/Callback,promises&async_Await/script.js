// Synchronus mean that the cude will run one after another in a fixed order
// As Synchronus means we can start other tasks while the previous task is running in background


// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 1000);

// console.log("3");
// console.log("4");


// CallBack Function is a function that is passed as an argument to another function and is executed after the other function is executed
function sum(a, b) {
    return a + b;
}

function calculator(a, b, sum) {
    console.log(sum(a, b));
}

calculator(1, 2, sum);

//callback hell is a situation where we have multiple nested callback functions
function getData(data, data2) {
    setTimeout(() => {
        console.log("Data is ", data);
        if (data2) {
            data2();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

// promises is for "eventual" completion of tast, it is an object in js

let promis = new Promise((resolve, reject) => {
    console.log("promise is pending");

    //resolve("promise is resolved");
    reject("promise is rejected");
})

console.log(promis);

function getData2(data, data2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data from promise is ", data);
            resolve("Data is resolved");
            if (data2) {
                data2();
            }
        }, 2000);
    })
}

//promise chaining is a way to chain multiple promises
let promise = getData2(1);

promise.then((result) => {
    console.log(result);
    return getData2(2);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// async and await , async functions will always returns a promise
// await can only be used inside an async function
// await will wait for the promise to resolve and then return the value
// async function must contain await keyword

async function getData3() {
    console.log("Data from async function");
    await getData2(1);
    console.log("Data from async function");
    await getData2(2);
}
//getData3();

//iife(Immediately Invoked Function Expression)
(async function () {
    console.log("Data from IIFE");
    await getData2(1);
    console.log("Data from IIFE");
    await getData2(2);
})();
