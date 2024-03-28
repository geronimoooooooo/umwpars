
const os = require('os');
const value =  os.cpus();
var xml2js = require('xml2js');
const { readXmlFile, parseXmlWithPromise, readXmlFileAsyncAwait } = require('./xmlFile');

var xml = '<foo><a>1   </a><b>    2   </b></foo>';

xml2js.parseString(xml, {explicitArray:false, trim: true}, f1);

function f1(err,result) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(result.foo.b);
}


parseXmlWithPromise(xml);


// readXmlFile('files/xml.xml', (err, result)=>{
//     console.dir(result, {depth: null})
// })


// const result = readXmlFileAsyncAwait('files/xml.xml');
// console.log(result);// Promise { <pending> }