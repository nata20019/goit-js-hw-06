const input = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
}
