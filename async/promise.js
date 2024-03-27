const { logger } = require("../logger");


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
countValue.then(function(result){
    logger.info(result);
});