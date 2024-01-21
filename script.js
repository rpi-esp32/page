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

/*
ORIENTATION **************
*/

let a = document.getElementById("value31");
let b = document.getElementById("value32");
let c = document.getElementById("value33");
let d = document.getElementById("value34");
let e = document.getElementById("value35");
let f = document.getElementById("value36");
let g = document.getElementById("value37");
let h = document.getElementById("value38");

if ("DeviceOrientationEvent" in window) {
  window.addEventListener("deviceorientation", handler, false);
  f.textContent = "event registered.";
} else {
  a.textContent = "API not supported ...";
}

function handler(event) {
  console.log("handler is action");
  let LR = event.gamma;
  let FB = event.beta;
  let dir = event.alpha;
  let abs = event.absolute;
  let webkit = event.webkitCompassHeading??"failed experiment";

  c.textContent = LR;
  d.textContent = FB;
  e.textContent = dir;
  h.textContent = abs;
  g.textContent = webkit;
}

/********
 GPS ****
*********
***/
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "denied") {
    console.log("permission denied");
    return;
  } else {
    navigator.geolocation.getCurrentPosition(result, failed, {enableHighAccuracy: true,});
  }
});

function res(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat + "   " + lon);
  a.textContent = lat;
  b.textContent = lon;
}

function failed() {
  a.textContent = "failed GPS";
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(result, failed, {enableHighAccuracy: true,});
}
