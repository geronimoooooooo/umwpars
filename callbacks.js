const { logger } = require("./logger");

logger.info("info")
logger.info("info")
logger.info("info")
logger.error("error")
logger.debug("debug")
logger.debug("debug")
logger.debug("debug")

function callbacker(name,myCallback){
    console.log(name);
    myCallback();
}

function myCallback(){
    console.log("this is myCallback");
  
}

callbacker("bro", myCallback);

setTimeout(myCallback,5000);
console.log("2");


