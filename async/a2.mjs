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

let jsondata;    
fetch("https://jsonplaceholder.typicode.com/posts/1").then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
        }
      )

      let json="";

      const getJson = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        return await response.json()       
      }
      
      json = await getJson()
      console.log(json.title)//prints: sunt aut facere repellat provident