
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

