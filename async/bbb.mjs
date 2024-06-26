
import *  as xmlFile from "../xmlFile.js";
  // async/await code
  // const asyncMsg = await Promise.resolve('hello world');
  // console.log(asyncMsg);

  // async function f() {
  //   return Promise.resolve("broo1");
  //   return "broo1";
  // }
  // f().then(result=>console.log(result)); // 1
  
  // const f2 = async ()=>{return Promise.resolve(2)};
  // f2().then(res=>console.log(res));

  // Promise.resolve(3).then(res=>console.log(res));

  // xmlFile.parseXmlDirtyFunction('files/npv-archiv-configuration.xml')
  
  let cookies;
  
  async function bakeCookies() {
    console.log("stop the world to cook...");
    // Simulating baking time
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "some cookies as text"
  }
  async function serveCookies(){
    cookies = await bakeCookies();
    console.log(typeof cookies); //string
    console.log(cookies); //some cookies as text
    return cookies
  }
  
  cookies = await serveCookies()
  console.log(`my: ${cookies}`); //my: some cookies as text

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

const data = await getData("https://jsonplaceholder.typicode.com/posts/1");

console.log(data)
// console.log({data})
const d1 = {data}//adds data as key to the jsonValue
console.log(d1);


async function getJokes(category) { //categories such as “dev”, “science”, “movie”
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const data = await response.json();
    const joke = data.value;
    console.log(`Here's a joke about ${category}: ${joke}`);
    return joke
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

const joke2 = await getJokes("dev")
console.log(joke2);