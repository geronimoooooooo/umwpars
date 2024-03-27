const { logger } = require("../logger");


function doStuff(name, callback){
  logger.info("doStuff");
  callback()
}

function callback(){
  logger.info("this is function callback");
}

doStuff("name", function(err, script){
  logger.info("this is now anonym callback");
});

doStuff("name", callback);



