import fetch from 'node-fetch';
import *  as xmlFile from "./xmlFile.js";

export let urlGet = "https://mds.sommer.at/Web-Service-Admintool/fetchXHydro10.php?station=25062015&von=2024-03-26T16:00:49&name=npvbgd&passwort=4f56bbca4d4bdbe06cb8819286ea8690";

//https://mds.sommer.at/Web-Service-Admintool/fetchXHydro10.php?station=02190574&von=2023-01-01T12:19:41&bis=2023-01-01T12:39:41&name=npvbgd&passwort=4f56bbca4d4bdbe06cb8819286ea8690

let arrStationsNummern = ["25062015", "08140883", "29090285", "11080139", "43080208", "09080126", "34080167", "02190574"];
const arrStationsXmlResponse = [];
const arrStationsUrl = []

function createUrls(){  
  for (let index = 0; index < arrStationsNummern.length; index++) {
    const nummer = arrStationsNummern[index];
    
    let currentDate = new Date();
    console.log(currentDate);
    currentDate.setMinutes(currentDate.getMinutes() - 10)
    
    let currentDateIsoMinus10 = currentDate.toISOString().slice(0,-5);
    currentDate.setMinutes(currentDate.getMinutes() +20)
    let currentDateIsoPlus10 = currentDate.toISOString().slice(0,-5);
    
    
    let server = "https://mds.sommer.at/Web-Service-Admintool/fetchXHydro10.php?";
    let station = "station=" + nummer;
    let von = currentDateIsoMinus10;
    let vonString = "&von=" + von;
    let bis = currentDateIsoPlus10;
    let bisString = "&bis=" + bis;
    let login ="&name=npvbgd&passwort=4f56bbca4d4bdbe06cb8819286ea8690";
    
    let urlComplete = server + station + vonString + bisString + login; 
    arrStationsUrl.push(urlComplete);
    
  }
}

export async function getXmlFromMdsForAllUrls(config){
  createUrls();
  for (const item of arrStationsUrl) {
    console.log(item);
    const responseXml = await fetchXmlFromMds(item);
    const resp2 = await xmlFile.parseXmlAsync(responseXml);
    arrStationsXmlResponse.push(resp2);
  }
  
  for (let index = 0; index < arrStationsXmlResponse.length; index++) {
    const station = config[index];
    if(JSON.stringify(config[index].pmdl) == JSON.stringify(arrStationsXmlResponse[index].tsel.pmdl)){
        console.log("HURRA Umweltparameterreihenfolge identisch!")
    }else{
        console.log("fail: Umweltparameterreihenfolge zwischen config file und MDS responseXML NICHT identisch!");
         console.dir(config[index].pmdl, {depth:null});
         console.dir(arrStationsXmlResponse[index].tsel.pmdl, {depth:null});
    }   
    
  }
  return arrStationsXmlResponse;
}

function getArray(){
  return arrStationsXmlResponse;
}

// createUrls();
// getXmlFromMdsForAllUrls();




//'https://quotes.toscrape.com/random'

let xmlFromMds = "";

export async function fetchXmlFromMds(url) {
    try {
      const response = await fetch(url);
  
      // Check if response is OK (status 200)
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
  
      // Read the response as text
      const xmlString = await response.text();
      return xmlString;

    } catch (error) {
      console.error('Error fetching XML:', error);
      return null;
    }
  }

async function getXmlFromMds(){
    fetch(urlGet)
        .then((response) => response.text())
        .then((body) => {
            // console.log(body);
            xmlFromMds = body;
        }); 
    }
    
// getXmlFromMds()

// fetchXmlFromMds(urlGet)
//     .then(xmlString => {
//     if (xmlString) {
//       console.log('XML Response:', xmlString);
//       // Now you can further process the XML string as needed
//       xmlFromMds = xmlString;
//     } else {
//       console.log('Failed to fetch XML.');
//     }
//   })


function printUrlGet() {
  console.log(urlComplete);
}

// printUrlGet();

// fetch(urlGet)
//     .then(response => {
//         // network failure, request prevented
//         if (response.status >= 200 && response.status < 300) {
//             return Promise.resolve(response);
//         }


//         return Promise.reject(new Error(response.statusText));
//     })
//     .then(response => response.json())
//     .then(result => {
//         // custom error
//     })
//     .catch(error => {
//         // common error
//         return null;
//     });

