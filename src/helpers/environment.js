
let APIURL = "";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http:localhost:3000";
    break;
  case "modpodapp.herokuapp.com":
    APIURL = "https://modpodserver.herokuapp.com";
}

export default APIURL;

