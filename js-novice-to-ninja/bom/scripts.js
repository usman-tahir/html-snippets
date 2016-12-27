
console.log(window.navigator.userAgent);

// Read and write property (can be changed by assignment)
console.log(window.location.href);
/*
window.location.href = "http://www.google.com";
console.log(window.location.href); // Redirects to Google
*/

console.log(window.location.protocol);
console.log(window.location.host || "none");
console.log(window.location.port || "none");
console.log(window.location.pathname || "none");
console.log(window.location.search || "none");
console.log(window.location.hash || "none");
console.log(window.location.origin || "none");

// Opening up a custom pop-up
// var popup = window.open("https://sitepoint.com", "Sitepoint", "width=400, height=400, resizable=yes");
// popup.close();
// popup.moveTo(100, 100);
// popup.resizeTo(600, 400);

console.log("Current width/height of screen --> width: " + window.screen.width + ", height: " + window.screen.height);
console.log("Available width/height for screen --> width: " + window.screen.availWidth + ", height: " + window.screen.availHeight);

console.log(window.screen.colorDepth);

/*
  DOM writing
*/
document.write("Hello World!");

/*
  Cookies
*/
document.cookie = "name=Superman";
console.log(document.cookie);

// Expiration date for cookies
var expirationDate = new Date(),
  tomorrow = expirationDate.getTime() + (1000 * 60 * 60 * 24);
expirationDate.setTime(tomorrow);
document.cookie = "expires=" + expirationDate.toUTCString();

// Timing functions
function log() {
  console.log("Logging to the console");
}

// var repeat = window.setInterval(log, 1000);
// window.clearInterval(repeat);