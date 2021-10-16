const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const urlFibo = 'https://api-nodejs-seriefibonacci.herokuapp.com/fibonacci';

let getFiboServices = async (count = 5) => {
  if (count) {
    let bodyParams = {
      n: count,
    };

    let headers = {
      'Content-Type': 'application/json',
    };
    let params = {
      method: 'POST',
      body: JSON.stringify(bodyParams),
      headers,
    };
    let response = await fetch(urlFibo,params);
    let result = await response.json();
    console.log("============================== RESPONSE OF JSON: GET FIBONNACI =============================");
    console.log(result);
    console.log("=============================================================================================");
  }
};


// Call REST API
let n =  10
getFiboServices(n);