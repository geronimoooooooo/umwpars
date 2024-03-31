
(async ()=>{
  // async/await code
  const asyncMsg = await Promise.resolve('hello world');
  console.log(asyncMsg);
})()

async function printAsync(text) {    
  // return Promise.resolve(text); nicht gebraucht, da async func() Promise returnt
  return text; 
}

(async function(text) {
    const response = await printAsync(text);
    console.log(response);
})('Hello, World!!!222');

const f2 = async ()=>{return Promise.resolve(2)};
f2().then(res=>console.log(res));

Promise.resolve(3).then(res=>console.log(res));

async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });  
    let result = await promise; // wait until the promise resolves (*)  
    console.log(result); // "done!"
  }
  
f();

  // setTimeout(() => {
  //   console.log("hey");
  // }, 5000);

  // setInterval(() => {
  //   console.log("interval");
  // }, 2000);

async function bakeCookies() {
  // Simulating baking time
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("stop the world");
  return "some text"
}
let cookies;
async function serveCookies(){
  cookies = await bakeCookies();
  console.log(typeof cookies);
  console.log(cookies);
}


(async ()=> {

  cookies = await serveCookies()
  console.log(`my ${cookies}`);
})()
// let prom = bakeCookies()
// console.log(typeof prom);



const prom = new Promise((resolve, reject)=>{
  let num =10;

  if (num==10) {
    resolve(num)
  } else {
    reject(new Error("Danger danger!"));
  }
})

const hor = prom.then(function(result){
  console.log(result);
  return  result;
})
console.log(hor);
