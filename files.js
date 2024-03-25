const fs = require('fs');
const xml2js = require('xml2js');

function readXmlFile(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return callback(err, null);
        }

        // Parse XML to JavaScript object
        xml2js.parseString(data, (parseErr, result) => {
            if (parseErr) {
                return callback(parseErr, null);
            }

            callback(null, result);
        });
    });
}

// Example usage:
const filePath = 'example.xml'; // Replace with your XML file path

const arrList = [];
const arrLoc = [];

readXmlFile(filePath, (err, result) => {
    if (err) {
        console.error('Error reading XML file:', err);
    } else {
        // console.log('XML content:', result);
        // console.log('XML content:', JSON.stringify(result));
        // arrList.push(JSON.stringify(result));
        arrList.push(result);
        result['urlset']['url'].forEach((e)=>arrLoc.push(e['loc']));
    }
    printArrList();
});


function printArrList(){
    console.log("printer: " + arrList.length);
    arrList.forEach((e)=> console.log(e['urlset']['url']));
    arrLoc.forEach((item) => {
        console.log(item.toString() );
    });
}





// readXmlFile(filePath);