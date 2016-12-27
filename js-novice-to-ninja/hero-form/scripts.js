
var form = document.forms.hero;
form.addEventListener("submit", makeHero, false);

function makeHero (event) {
  event.preventDefault();
  var hero = {};
  hero.name = form.name.value;
  hero.realName = form.realName.value;
  
  hero.powers = [];
  for (var i = 0; i < form.powers.length; i += 1) {
    if (form.powers[i].checked) {
      hero.powers.push(form.powers[i].value);
    }
  }
  
  hero.type = form.type.value;
  hero.age = parseInt(form.age.value, 10);
  hero.city = form.city.value;
  hero.origin = form.origin.value;
  
  console.log(JSON.stringify(hero));
}