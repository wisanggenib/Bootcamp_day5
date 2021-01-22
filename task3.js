const axios = require('axios');
var fs = require('fs');
var util = require('util')


class Log {
  //create private variable
  #logMessage
  #listLogMessage = []

  //set message for List Log, data get from every function that execute
  setMessage(param) {
    console.log("Log Saved")
    this.#logMessage = param;
    this.#listLogMessage.push(this.#logMessage)
  }

  //print all data from List Log and export it to Log.log
  printLog() {
    fs.writeFileSync('./Log.log', 'Log List' + util.inspect(this.#listLogMessage))
    console.log("Log Printed")
  }
}

const logging = new Log()

//inserting task1.js
class Fetcher {
  constructor() { }

  Put = async (url, data) => {
    try {
      const resp = await axios.put(url, data);
      logging.setMessage(resp)
    } catch (err) {
      // Handle Error Here
      console.error(err);
      logging.setMessage(err)
    }
  };

  Delete = async (url) => {
    try {
      const resp = await axios.delete(url);
      logging.setMessage(resp)
    } catch (err) {
      // Handle Error Here
      console.error(err);
      logging.setMessage(err)
    }
  };

}

//initialize fetch 
const fetch = new Fetcher()

//execute all function
const executeAll = async () => {

  let dataJson = {
    "id": 30,
    "name": "Someone"
  };

  var putJsonResponse = await fetch.Put("https://httpbin.org/put", dataJson);
  var deleteJsonResponse = await fetch.Delete("https://httpbin.org/delete?id=1");
  var putJsonResponse2 = await logging.printLog();
}

executeAll()