
import *  as xmlFile from "../xmlFile.js";
  // async/await code
  const asyncMsg = await Promise.resolve('hello world');
  console.log(asyncMsg);

  async function f() {
    return Promise.resolve(1);
  }
  f().then(result=>console.log(result)); // 1
  
  const f2 = async ()=>{return Promise.resolve(2)};
  f2().then(res=>console.log(res));

  Promise.resolve(3).then(res=>console.log(res));

  xmlFile.parseXmlDirtyFunction('files/npv-archiv-configuration.xml')
