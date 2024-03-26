var xml2js = require('xml2js');
var xml = "<config><test>Hello</test><data>SomeData</data></config>";

var extractedData = "";
var parser = new xml2js.Parser();

parser.parseString(xml, function(err,result){
  //Extract the value from the data element
  extractedData = result['config']['data'];
  console.log(extractedData);
});

console.log("Note that you can't use value here\
 if parseString is async; extractedData=", extractedData);

 const myObject = {
    "a":"a",
    "b":{
       "c":"c",
       "d":{
          "e":"e",
          "f":{
             "g":"g",
             "h":{
                "i":"i"
             }
          }
       }
    }
 };
// console.dir(myObject, { depth: null });