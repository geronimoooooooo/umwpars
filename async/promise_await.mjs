// const { logger } = require("../logger");
import { logger } from "../logger.js";


//producer
let prom= new Promise((resolve, reject) => {
    let gate = true;

    if (gate) {
        resolve("ok");        
    } else {
        reject("fail");        
    }    
});

//consumer
prom.then(
    // result=> logger.info(result +": alles ok"),
    a => ok(),
    error=> logger.error(error +": error")
).finally(()=>logger.info("finally"));


function ok(){
    logger.info("alles ok hier in ok()")
}

function functionPromise(name){
    return new Promise((resolve, reject) => {
    resolve(name)       
    });
};

functionPromise("bro").then(res=>logger.info(res));

const count = true;
let some ="ab";

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no000000 count value");
    }
});
console.log(countValue);


const printer = (str) =>{
    countValue.then(function(result){
        logger.info(str+ ":" +result);
    });    
}
printer("printer")

async function doSomethingAsync() {
    return Promise.resolve('Hello, World!');
}
(async function() {
    const response = await doSomethingAsync();
    console.log(response);
})();
const response = await doSomethingAsync();
// const response = doSomethingAsync();
console.log('kj'+response);


async function getRecipes(){
    fetch("https://api.spoonacular.com/recipes/complexSearch?number=2&apiKey=b4408aa9ab144e47ae2bf8eff93e72f5")
    .then((response) => response.json())
    .then((user) => {
    const recipes = user.results.map(result => result.id)
    console.log("rec:§" +recipes)
    return recipes
    });
    }
    
//   const recipes = await getRecipes();

const resp = await fetch('https://jsonplaceholder.typicode.com/users/3');
const user = await resp.json();
console.log(user.company)

const res = await fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
  const data = await res.json();
  console.log(data.type);
}

// async/await code
const asyncMsg = await Promise.resolve('hello world');
console.log(asyncMsg);