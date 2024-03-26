const xml2js = require('xml2js');

async function parseXmlAsync(data) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(data, (err, xml) => {
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

module.exports = {tester, parseXmlAsync};
  