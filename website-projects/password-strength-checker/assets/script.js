// Variables
const passInput = document.querySelector("#pass");
const strAns = document.querySelector("#strAns");
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890"; 
const special = "!@#$%^&*()_+-=[]/.,';";
// Put these variables to false at start for self-explanatory reasons
let hasInput = false;
let hasSpecial = false;
let hasNumber = false;
let hasLetter = false;

passInput.addEventListener("input", () => {
  const passVal = passInput.value || "nothing";

});

if (passVal != "nothing") {
  hasInput = true;
}

if (passVal.includes(letters)) {
  hasLetter = true;
}

if (passVal.includes(numbers)) {
  hasNumber = true;
}

if (passVal.includes(special)) {
  hasSpecial = true;
}


if (hasInput) {
  if (hasLetter && !hasNumber && !hasSpecial) {
    strAns.innerText = "Weak";
    strAns.style.classList.toggle = ".weak";
  }
}
