const fs = require('fs');
const xml2js = require('xml2js');

const xmlExample1 = "./files/xml.xml";

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

function tester(){
    console.log("hey, tester here");
    return "hey tester here";
  }


/**
 * The function `printXml2Console` reads an XML file and prints its content to the console.
 * @param [xmlPath] - The `xmlPath` parameter in the `printXml2Console` function is used to specify the
 * path to the XML file that you want to read and print to the console. In the example code you
 * provided, the default value for `xmlPath` is set to `xmlExample1`.
 */
function printXml2Console(xmlPath=xmlExample1){
  let xml_string = fs.readFileSync(xmlPath, "utf8");
  console.log(xml_string);  
}

/**
 * The function `getXmlFromFile` reads and returns the content of an XML file specified by the
 * `xmlPath` parameter.
 * @param [xmlPath] - The `xmlPath` parameter in the `getXmlFromFile` function is the path to the XML
 * file that you want to read and retrieve the content from. It is set to a default value
 * `xmlExample1`, which means if no path is provided when calling the function, it will use `
 * @returns returns the XML content as a string.
 */
function getXmlFromFile(xmlPath=xmlExample1){
  let xml_string = fs.readFileSync(xmlPath, "utf8");  
  return xml_string;
}

function printXml2ConsoleWithStartkey(xml_string){
  const parser = new xml2js.Parser({ attrkey: "ATTR" });
  parser.parseString(xml_string, function(error, result) {
  if (error === null) {
      console.log(result);
      console.log("result: "+ JSON.stringify(result));
  } else {
      console.log(error);
  }
});
}

// const filePath = 'example.xml'; 
const xmlConfigPath = 'files/npv-archiv-configuration.xml'
const arrList = [];


function readConfigXmlFile(filePath , callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err, null);
        }
        // Parse XML to JavaScript object
        xml2js.parseString(data, { explicitArray: false}, (parseErr, result) => {
            if (parseErr) {
                return callback(parseErr, null);
            }
            callback(null, result);
        });
    });
}

// readConfigXmlFile(filePath, (err, result) => {
//     if (err) {
//         console.error('Error reading XML file:', err);
//     } else {
//         console.log('XML content:', result);
//         // console.log('XML content:', JSON.stringify(result));
//         // arrList.push(JSON.stringify(result));
//         arrList.push(result);
//         result['klima']['stationen']['station'].forEach((station)=>arrStationsNamen.push(station['name']));
//     }
//     // printArrList();
// });


function printStationNames(arrStationsNamen){
    console.log("printer: " + arrStationsNamen.length);
    // arrList.forEach((e)=> console.log(e['urlset']['url']));
    arrStationsNamen.forEach((item) => {
        console.log(item.toString() );
    });
}

function parseMyXmlFast(){
  var parser = new xml2js.Parser();
  fs.readFile('files/xml.xml', function(err, data) {
  parser.parseString(data, function (err, result) {
    console.dir(result, {depth: null});
    console.log('Done');
});
});
}


module.exports = {tester, parseXmlAsync, printXml2Console, getXmlFromFile, 
  printXml2ConsoleWithStartkey, printStationNames, readConfigXmlFile, parseMyXmlFast};
  