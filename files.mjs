
import xml2js from "xml2js";
import * as xmlFile from "./xmlFile.js";

var xml = '<foo><a>1   </a><b>    2   </b></foo>';

xml2js.parseString(xml, {explicitArray:false, trim: true}, f1);

function f1(err, result) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(result.foo.b);
}


xmlFile.parseXmlWithPromise(xml);


xmlFile.readXmlFile('files/xml.xml', (err, result)=>{
    console.dir(result, {depth: null})
})


const result = await xmlFile.readXmlFileAsyncAwait('files/xml.xml');
console.dir(result, {depth: null})