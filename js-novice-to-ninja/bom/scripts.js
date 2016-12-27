
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
var popup = window.open("https://sitepoint.com", "Sitepoint", "width=400, height=400, resizable=yes");
// popup.close();
// popup.moveTo(100, 100);
// popup.resizeTo(600, 400);

console.log("Current width/height of screen --> width: " + window.screen.width + ", height: " + window.screen.height);
console.log("Available width/height for screen --> width: " + window.screen.availWidth + ", height: " + window.screen.availHeight);

console.log(window.screen.colorDepth);