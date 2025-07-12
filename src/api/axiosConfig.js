import axios from 'axios';

export default axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"},
    axios.get(`https://cors-anywhere.herokuapp.com/[YOUR_API_URL]`,{headers: {'Access-Control-Allow-Origin': ''https://9c96-103-106-239-104.ap.ngrok.io'}})
      .then(response => console.log(response:data);
  }
   // baseURL: 'http://localhost:8080'
});
