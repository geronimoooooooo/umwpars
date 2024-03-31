let bro;
function foo() {
  return new Promise((resolve, reject)=>{
    resolve("hey")
  })  
}

// bro = await foo();
console.log(bro);

let prom = await Promise.resolve("ak").then(result =>{return result;})
console.log(prom);