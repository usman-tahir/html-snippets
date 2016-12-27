
// The form from the webpage
var form = document.forms["search"],
  input = form.elements[0], // Alternatively, form["searchBox"]
  button = form.elements[1];

input.addEventListener("focus", function () {
  console.log("The input box is now in focus.");
});

input.addEventListener("blur", function () {
  console.log("The input box has been blurred (not in focus).");
});

input.addEventListener("change", function () {
  console.log("The input box's value has changed.");
});

// Form submission
form.addEventListener("submit", search, false);

function search () {
  console.log("You searched for: " + input.value);
  console.log("The search form has been submitted.");
  event.preventDefault();
  // return false;
}