const axios = require('axios');
var fs = require('fs');
let logSystem

class Fetcher {
  constructor() { }

  Put = async (url, data) => {
    try {
      const resp = await axios.put(url, data);
      console.log(resp.data)
      logSystem = data
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
}

const log = () => {
  var fs = require('fs');

  fs.writeFile('./data.log',
    `Name: ${dataJson}`
    , () => {
      console.log('Successfully saved');
    })
}

//initialize fetch 
const fetch = new Fetcher()
let dataJson ={
  "id": 30,
  "name": "Someone"
};

const executeAll = async () => {

  var putJsonResponse = await fetch.Put("https://httpbin.org/put", dataJson);
  var putJsonResponse2 = await log();
}

executeAll()



// let name = 'TestName';
// let otherData = 'TestOtherData';

// fs.writeFile('./data.txt',
//   `Name: ${logSystem}`
//   , () => {
//     console.log('Successfully saved');
//   })