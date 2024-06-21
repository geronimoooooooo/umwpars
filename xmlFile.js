const fs = require('fs');
const { resolve } = require('path');
const xml2js = require('xml2js');

const xmlExample1 = "./files/xml.xml";
const xmlConfigPath = 'files/npv-archiv-configuration.xml'
const arrList = [];

function tester(){
    console.log("hey, tester here");
    return "hey tester here";
  }
/**
 * The function `readParseXmlFile` reads and parses an XML file using the xml2js library in JavaScript.
 * @param [xmlPath=files/xml.xml] - The `xmlPath` parameter is a string that represents the file path to the XML file that
 * you want to read and parse. In the provided function `readParseXmlFile`, the default value for `xmlPath` is set to
 * `'files/xml.xml'`. This means that if no `xml
 */
function readParseXmlFile(xmlPath='files/xml.xml'){
  var parser = new xml2js.Parser();
  fs.readFile(xmlPath, function(err, data) {
    parser.parseString(data, {explicitArray:false, trim: true}, function (err, result) {
      console.dir(result, {depth: null});
      console.log('Done');
});
});
}  
/**
 * The function `readXmlFileAsyncAwait` reads an XML file asynchronously using `fs.readFileSync` and
 * `xml2js.parseStringPromise`.
 * @param xmlPath - The `xmlPath` parameter is a string that represents the file path to the XML file 
 * @returns the parsed XML data from the file is returned as a result
 */
async function readXmlFileAsyncAwait(xmlPath) {
    const dataFromFile = fs.readFileSync(xmlPath, 'utf-8');
    const result = await xml2js.parseStringPromise(dataFromFile, {explicitArray: false, trim: true});
    return result;
  }
/**
 * The function `readXmlFromFileIntoString` reads and returns the content of an XML file specified by the
 * `xmlPath` parameter.
 * @param [xmlPath] - The `xmlPath` parameter in the `readXmlFromFileIntoString` function is the path to the XML
 * file that you want to read and retrieve the content from. It is set to a default value
 * `xmlExample1`, which means if no path is provided when calling the function, it will use `
 * @returns returns the XML content as a string.
 */
function readXmlFromFileIntoString(xmlPath=xmlExample1){
  let xml_string = fs.readFileSync(xmlPath, "utf8");  
  return xml_string;
}
function readXmlFile(filePath , callback) {
    fs.readFile(filePath, 'utf-8', (err, dataFromFile) => {
        if (err) {
            return callback(err, null);
        }
        // Parse XML to JavaScript object
        xml2js.parseString(dataFromFile, {explicitArray: false, trim: true}, (parseErr, result) => {
            if (parseErr) {
                return callback(parseErr, null);
                // return reject(parseErr);
            }
            callback(null, result);
            // resolve(result);
        });
    });
}
function parseXmlDirtyFunction(pathname, callback) {
  var parser = require('xml2js').Parser( {explicitArray: false, trim: true})
      util = require('util')

  fs.readFile(pathname, function (err, data) {
      parser.parseString(data, function(err, result) {
          console.log('Complete result:');
          // console.log(util.inspect(result, {depth: null})); //Work
          console.log('Try to access element:');
          console.dir(result.klima.stationen.station[0], {depth:null}); //Work          
      });
  });
}
/**
 * The function `parseXmlWithPromise` uses the xml2js library to parse XML data into a JavaScript object using promises.
 * @param xml - The `xml` parameter is the XML data that you want to parse using the `xml2js` library with promises. The
 * `parseStringPromise` function from `xml2js` library is used to parse the XML data asynchronously and returns a promise
 * that resolves with the parsed result or rejects with
 */
function parseXmlWithPromise(xml){
  xml2js.parseStringPromise(xml, {explicitArray:false, trim: true})
      .then(function (result) {
      console.dir(result);
      console.log('Done');        
  })
      .catch(function (err) {
  // Failed
  });
}
/**
 * The function `parseXmlAsync` asynchronously parses XML data using the xml2js library and returns a Promise that resolves
 * with the parsed XML object.
 * @param data - The `data` parameter in the `parseXmlAsync` function is the XML data that you want to parse asynchronously
 * using the `xml2js` library. This data should be in a string format representing the XML content that you want to convert
 * into a JavaScript object.
 * @returns The `parseXmlAsync` function is returning a Promise that will resolve with the parsed XML data if successful,
 * or reject with an error if there was a problem parsing the XML data.
 */
async function parseXmlAsync(data) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(data, { explicitArray: false}, (err, xml) => {
      if (err) {
        reject(err);
      }
      resolve(xml);
    })
  });
}
/**
 * Rreads an XML file and prints its content to the console.
 * @param [xmlPath] - The `xmlPath` parameter in the `printXml2Console` function is used to specify the
 * path to the XML file that you want to read and print to the console. In the example code you
 * provided, the default value for `xmlPath` is set to `xmlExample1`.
 */
function printXml2Console(xmlPath=xmlExample1){
  let xml_string = fs.readFileSync(xmlPath, "utf8");
  console.log(xml_string);  
}
function printXml2ConsoleWithStartkey(xmlString){
  const parser = new xml2js.Parser({ attrkey: "ATTR" });
  parser.parseString(xmlString, function(error, result) {
  if (error === null) {
      console.log(result);
      console.log("result: "+ JSON.stringify(result));
  } else {
      console.log(error);
  }
});
}
function printStationNames(arrStationsNamen){
  console.log("printer: " + arrStationsNamen.length);
  // arrList.forEach((e)=> console.log(e['urlset']['url']));
  arrStationsNamen.forEach((item) => {
      console.log(item.toString() );
  });
}

module.exports = {tester, parseXmlAsync, printXml2Console, readXmlFromFileIntoString, 
  printXml2ConsoleWithStartkey, printStationNames, readXmlFile,parseXmlWithPromise,
   readParseXmlFile, readXmlFileAsyncAwait, parseXmlDirtyFunction};