/*  ****** NAVIGATION ********* */
function go(event) {
  document.getElementById("goto01").classList.remove("active");
  document.getElementById("goto02").classList.remove("active");
  document.getElementById("goto03").classList.remove("active");
  document.getElementById("page01").classList.remove("show");
  document.getElementById("page02").classList.remove("show");
  document.getElementById("page03").classList.remove("show");

  const nav = event.target;
  event.target.classList.add("active");

  const targetID = nav.getAttribute("targetID");
  const page = document.getElementById(targetID);
  page.classList.add("show");
}

/*   GLOBALS   */
let a = document.getElementById("value31");
let b = document.getElementById("value32");
let c = document.getElementById("value33");
let d = document.getElementById("value34");
let e = document.getElementById("value35");
let f = document.getElementById("value36");
let g = document.getElementById("value37");
let h = document.getElementById("value38");

let LR;
let FB;
let DIR;
let ABS;
let WEBKIT;

/*  *********** ORIENTATION ***************/
if ("DeviceOrientationEvent" in window) {
  window.addEventListener("deviceorientation", handler, false);
  // f.textContent = "event registered.";
} else {
  a.textContent = "API not supported ...";
}

function handler(event) {
  console.log("handler is action");
  LR = event.gamma;
  FB = event.beta;
  DIR = event.alpha;
  ABS = event.absolute;
  WEBKIT = event.webkitCompassHeading??"failed compass";

  e.textContent = LR.toFixed(2);
  f.textContent = FB.toFixed(2);
  g.textContent = DIR.toFixed(2);
  // h.textContent = ABS;
  
}

/******** GPS ****************/
navigator.permissions.query({ name: "geolocation" }).then((permit) => {
  if (permit.state === "denied") {
    console.log("permission denied");
  } else {
    navigator.geolocation.getCurrentPosition(success, failed, {enableHighAccuracy: true,});
  }
});

function success(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let alt = position.coords.altitude;
  let acc = position.coords.accuracy;
  let time = position.timestamp;
  const date = new Date(time);
  console.log(lat + "   " + lon);
  console.log(date);
  a.textContent = lat;
  b.textContent = lon;
  c.textContent = acc;
  d.textContent = date;
  document.querySelector("#content button").classList.remove("active");
}

function failed() {
  a.textContent = "cannot get GPS";
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(success, failed, {enableHighAccuracy: true,});
}











