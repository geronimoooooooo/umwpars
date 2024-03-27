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