let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterV = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", (event) => {
  console.log(event);
  counterValue--;
  onClick();
});

incrementBtn.addEventListener("click", (event) => {
  console.log(event);
  counterValue++;
  onClick();
});
function onClick() {
  counterV.textContent = counterValue;
}
