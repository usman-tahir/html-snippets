
var pattern = /\w+ing/;
console.log(pattern.test("joke")); // false
console.log(pattern.test("joking")); // true

console.log(pattern.exec("joke")); // null, since it does not match
console.log(pattern.exec("joking")) // returns 'joking'
console.log(pattern.exec("he was laughing and joking")); // returns 'laughing'

var javascriptPattern = /[Jj][aeiou]v[aeiou]/;
console.log(javascriptPattern.test("JavaScript")); // true
console.log(javascriptPattern.test("jive")); // true
console.log(javascriptPattern.test("hello")); // false

var jPattern = /J[aeiou]+\w*ing/i;
console.log(jPattern.test("joking")); // true
console.log(jPattern.test("jeering")); // true
console.log(jPattern.test("jousting")); // true

var pdfPattern = /.*\.pdf$/;
console.log(pdfPattern.test("chapter_1.pdf")); // true
console.log(pdfPattern.test("report.doc")); // false

var string = "Hello World from JavaScript!";
console.log(string.split(/\s+/)); // Splits the sentence into words based on the spaces between them

console.log("JavaScript".match(/[aeiou]/)); // returns the first vowel
console.log("JavaScript".match(/[aeiou]/g)); // returns an array of all the vowels
console.log("I'm learning JavaScript".search(/java/i)); // Returns 13
console.log("JavaScript is the future!".replace(/J[aeiou]v[aeiou]/, "Type"));