//fetch api provide interface for fetching resources such as json, data, files etc

const url = "https://catfact.ninja/fact";
const facts = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    let responce = await fetch(url);
    console.log(responce);//it return json
    console.log(responce.status)

    //to get json data from reponse we have to use .json() method
    //but .json() is async function 
    //so we have to use await with .json()
    let data = await responce.json();
    console.log(data);
    //after this .json() method return promise
    //now we have to parse the json data 

    //display the data
    facts.innerText = data.fact;

}


btn.addEventListener("click", getFacts);


