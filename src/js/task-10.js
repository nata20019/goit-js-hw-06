// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }
// const collection = document.querySelector("#controls");
// const input = document.querySelector("input");
// const create = document.querySelector("button[data-create]");
// const destroy = document.querySelector("button[data-destroy]");
// const div = document.querySelector("div#boxes");

// create.addEventListener("click", createBoxes);
// destroy.addEventListener("click", destroyBoxes);
// let amount = input.value;
// const startWidth = 30;
// const startHeight = 30;
// function createBoxes(amount) {
//   const divsArray = [];
//   for (let i = 0; i <= amount; i++) {
//     const elem = `<div style="width: ${startWidth + i * 10}px; height: ${
//       startHeight + i * 10
//     }px; background-color: ${getRandomHexColor()};"></div>`;
//     // elem.style.backgroundColor = getRandomHexColor();
//     divsArray.push(elem);

//     div.append(...elem);
//   }
//   return divsArray.join("");
// }
// function destroyBoxes() {
//   div.innerHTML = "";
// }

const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);
const startWidth = 30;
const startHeight = 30;

function onBtnCreateClick(e) {
  destroyBoxes();
  const divs = createBoxes(
    Number(e.currentTarget.parentNode.children[0].value)
  );

  return refs.boxes.insertAdjacentHTML("beforeend", divs);
}

function createBoxes(amount) {
  const divsArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = `<div style="width: ${startWidth + i * 10}px; height: ${
      startHeight + i * 10
    }px; background-color: ${getRandomHexColor()};"></div>`;
    divsArray.push(divEl);
  }
  return divsArray.join("");
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
