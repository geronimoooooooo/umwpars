// const xmlFile = require('./xmlFile');
// const files = require('./files');

import *  as xmlFile from "./xmlFile.js";
// const { fetchXmlFromMds, urlGet } = require('./get-requests.mjs');
import { fetchXmlFromMds,urlGet, getXmlFromMdsForAllUrls } from "./get-requests.mjs";

const arrList = [];
const arrLoc = [];
const arrStationsNamen = [];

// xmlFile.printXml2Console('files/npv-archiv-configuration.xml');
// console.log(xmlFile.getXmlFromFile())
// xmlFile.printXml2ConsoleWithStartkey(xmlFile.getXmlFromFile('files/npv-archiv-configuration.xml'));

// xmlFile.readXmlFile('files/xml.xml', (err, result) => {
//     if (err) {
//         console.error('Error reading XML file:', err);
//     } else {
//         // console.dir(result, { depth: null });
//         // console.log('XML content:', JSON.stringify(result));
//         // arrList.push(JSON.stringify(result));

//         // console.log(result.urlset.abc[0].url[0]);

//         // result.urlset.abc.forEach(abc => {
//         //     // console.log(abc);
//         //     console.dir(abc, { depth: null });
//         // });
//         // result.urlset.abc.map(abc => {            
//         //     console.dir(abc, { depth: null });
//         // });

//         // const locs = result.urlset.abc[0].url.map(url => url.loc);
//         // console.log("Locs:", locs);

//         // console.log(result['urlset']['abc'][0]['url'][0]);

        
//         result['urlset']['abc'][0]['url'].forEach((e)=>{
//             arrList.push(e);
//             console.log(e);
//             // console.dir(e, { depth: null });
//         });        
                
//         arrList.forEach((e)=>arrLoc.push(e['loc']));
//         arrLoc.forEach((item) => {
//             console.log("some loc: "+ item );
//         });

//     }
//     // printArrList();
//     // xmlFile.printStationNames(arrStationsNamen)
// });

xmlFile.readXmlFile('files/npv-archiv-configuration.xml', (err, result) => {
    if (err) {
        console.error('Error reading XML file:', err);
    } else {
        // console.log('XML content:');
        // console.dir(result, {depth: null});
        // console.log('XML content:', JSON.stringify(result));
        // arrList.push(JSON.stringify(result));        
        
        let stationen = result.klima.stationen;

        //use this when { explicitArray: false} in function parseString
        result['klima']['stationen']['station'].forEach((e)=>{
            arrList.push(e);
            // console.log(e);
            // console.dir(e, { depth: null });
        });        
                
        arrList.forEach((e)=>arrLoc.push(e['name']));
        arrLoc.forEach((item) => {
            console.log("Station: "+ item );
        });

        arrList.forEach((e)=>{
            console.log(e.name);
        });


        // result.klima.stationen.forEach(abc => {            
        //     // console.dir(abc, { depth: null });
        // });

        for (let index = 0; index < arrList.length; index++) {
            const element = arrList[index];
            console.log("XML:"+ element.name);
            // console.dir(element, { depth: null });            
        }                
  
        // console.dir(stationen, { depth: null });
        console.log(typeof stationen)
        // let station = arrList.find((station) => station.name.includes("Alpelwand"));
        let station = arrList.find((station) => station.name === "Alpelwand");
        console.log("Station Nummer: " +station.nummer)
        console.log("Station pmdl: " +JSON.stringify(station.pmdl))
        console.dir(station, {depth: null});


        // result['urlset']['url'].forEach((e)=>arrLoc.push(e['loc']));
        // arrLoc.forEach((item) => {
        //     console.log(item.toString() );
        // });
        // result['klima']['stationen'].forEach((station)=>{

        // arrStationsNamen.push(station['name']);
        // console.log(station['name']);
        // });
    }
    // printArrList();
    // xmlFile.printStationNames(arrStationsNamen)
});

let xmlFromMds =""

const xmlS = await fetchXmlFromMds(urlGet)
    .then(xmlString => {
    if (xmlString) {
    //   console.log('XML Response:', xmlString);
      // Now you can further process the XML string as needed
      xmlFromMds = xmlString;
    } else {
      console.log('Failed to fetch XML.');
    }
  })

  const pro = xmlFile.parseXmlAsync(xmlFromMds);  
  pro.then(xmlString=>{
    
    // console.dir(xmlString, {depth: null});
    let s1 = xmlString.tsel.pmdl.toString();    
    // console.dir(xmlString.tsel.pmdl,{depth: null});
    // console.dir(arrList[0].pmdl,{depth: null});
    
    if(JSON.stringify(xmlString.tsel.pmdl) == JSON.stringify(arrList[0].pmdl)){
        // console.log("HURRA!")
    }else{
        // console.log("fail");
    }   
  })

  const arrStationsXmlResponseAsXml2jsObj = [];
  const arrStationsXmlResponse = await getXmlFromMdsForAllUrls(arrList);
  await arrStationsXmlResponse.forEach(e=>{
    // console.log("aaaa: " +e)

    const pro = xmlFile.parseXmlAsync(e);
    pro.then(xmlString=>{        
        let s1 = xmlString.tsel.pmdl;
        
        // console.dir(s1,{depth: null});
        // console.dir(arrList[0].pmdl,{depth: null});
        arrStationsXmlResponseAsXml2jsObj.push(s1);        
        console.log("bbbbbbbbbbb ")
        console.dir(s1, {depth: null})
      })
  });

  async function compare(config, server){
    for (let index = 0; index < config.length; index++) {
        const station = config[index];
        if(JSON.stringify(config[index].pmdl) == server[index]){
            console.log("HURRA!2222")
        }else{
            console.log("fail2222");
            // console.dir(config[index].pmdl, {depth:null});
            // console.log(server[index], {depth:null});
        }   
        
    }
  }

//   await compare(arrList, arrStationsXmlResponseAsXml2jsObj);

//   xmlFile.parseMyXmlFast()
//   console.log('XML Response:', xmlFromMds);

/*
if(JSON.stringify(xmlString.tsel.pmdl) == JSON.stringify(arrList[0].pmdl)){
            console.log("HURRA!")
        }else{
            console.log("fail");
        }   
        */