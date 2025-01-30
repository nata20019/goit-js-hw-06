const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
button.addEventListener("click", onClick);

function onClick() {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
