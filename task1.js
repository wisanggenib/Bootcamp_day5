const axios = require('axios');

//create class fetcher
class Fetcher {
    constructor() { }

    //declare all function


    Get = async (url) => {
        try {
            const resp = await axios.get(url);
            console.log(resp.data)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    Delete = async (url) => {
        try {
            const resp = await axios.delete(url);
            console.log(resp.data)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    Post = async (url, data) => {
        try {
            const resp = await axios.post(url, data);
            console.log(resp.data)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    Put = async (url, data) => {
        try {
            const resp = await axios.put(url, data);
            console.log(resp.data)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    Patch = async (url, data) => {
        try {
            const resp = await axios.patch(url, data);
            console.log(resp.data)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
}

//initialize fetch 
const fetch = new Fetcher()

const executeAll = async () => {

    //executing all function
    console.log("performing get")
    var getJsonResponse = await fetch.Get("https://httpbin.org/get");
    console.log("performing delete")
    var deleteJsonResponse = await fetch.Delete("https://httpbin.org/delete?id=1");

    //json Data for param 
    let dataJson ={
        "id": 30,
        "name": "Someone"
      };
    console.log("performing post")
    var postJsonResponse = await fetch.Post("https://httpbin.org/post", dataJson);
    console.log("performing put")
    var putJsonResponse = await fetch.Put("https://httpbin.org/put", dataJson);
    console.log("performing patch")
    var patchJsonResponse = await fetch.Patch("https://httpbin.org/patch", dataJson);

}

//execute
executeAll()