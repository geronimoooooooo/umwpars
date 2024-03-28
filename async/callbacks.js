const { logger } = require("../logger");


function doStuff(name, callback){
  logger.info(name);
  callback()
}

function callback(){
  logger.info("this is function callback");
}

doStuff("name with anonym", function(err, script){
  logger.info("this is now anonym callback");
});

doStuff("name", callback);



