const pino = require("pino");
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

logger.info(`Hello World`);

function callbacker(name,myCallback){
    console.log(name);
    myCallback();
}

function myCallback(){
    console.log("this is myCallback");
    logger.info("test pino")
    logger.info("asdfasf")
}

callbacker("bro", myCallback);

setTimeout(myCallback,5000);
console.log("2");
logger.error("error")

