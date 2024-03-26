const fs = require('fs');
const { resourceLimits } = require('worker_threads');
const xml2js = require('xml2js');

const xmlPath = "files/xml.xml"

let xmlString2 = '<?xml version="1.0" encoding="UTF-8"?>';//<url><loc>https://johnnyreilly.com/tags/ajax</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>';
xmlString2 = "xmlversionencodingUTFurllochttpsjohnnyreillycomtagsajaxlocchangefreqweeklychangefreqprioritypriorityurl"

let xmlString = fs.readFileSync(xmlPath, "utf8");
xmlString = xmlString.trim().replace(/[^a-zA-Z]/g, "");
xmlString2 = xmlString2.trim().replace(/[^a-zA-Z]/g, "");

console.log(xmlString);
console.log(xmlString2); //xmlversionencodingUTF

if(xmlString == xmlString2){
    console.log("same");
}

xmlString = fs.readFileSync(xmlPath, "utf8");

xml2js.parseString(xmlString, (err,result)=>{
    console.log(result);
    console.log(result['url']['loc']);
})

function parseXml(xml){
    let json = {};
    xml2js.parseString(xml, { explicitArray: false, ignoreAttrs: true }, (err, result) => {
      json = result;
    });
    return json;
  }

  console.log(parseXml(xmlString));