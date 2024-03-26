import fetch from 'node-fetch';

export let urlGet = "http://mds.sommer.at/Web-Service-Admintool/fetchXHydro10.php?station=25062015&von=2024-03-26T16:00:49&name=npvbgd&passwort=4f56bbca4d4bdbe06cb8819286ea8690";

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
console.log("xml:" + xmlFromMds);




    

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