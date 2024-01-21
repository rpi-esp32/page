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

let a = document.getElementById("value31");
let b = document.getElementById("value32");
let c = document.getElementById("value33");
let d = document.getElementById("value34");
// console.log(typeof Accelerometer === "function");
// a.textContent = "DeviceOrientationEvent" in window;

if ("DeviceOrientationEvent" in window) {
  window.addEventListener("deviceorientation", handler, false);
  d.textContent = "event registered.";
} else {
  a.textContent = "API not supported ...";
}

function handler(event) {
  console.log("handler is action");
  let LR = event.gamma;
  let FB = event.beta;
  let dir = event.alpha;

  a.textContent = LR;
  b.textContent = FB;
  c.textContent = dir;
}

// // const sensor = new Accelerometer();
// window.addEventListener("devicemotion", handler);
// // sensor.start();

// function handler(acceleration, targetID) {
//   // var info, exz = "[X, Y, Z]";
//   var x = acceleration.x;
//   a.textContent = x;
// }

navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "denied") {
    console.log("permission denied");
    return;
  } else {
    console.log("ok");
    navigator.geolocation.getCurrentPosition(res);
  }
});

function res(position) {
  console.log(position.coords.latitude);
}
