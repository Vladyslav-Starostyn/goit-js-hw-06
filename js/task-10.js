const inputEl = document.querySelector("#controls>input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.getElementById("boxes");

buttonCreateEl.addEventListener("click", onCreateEl);
buttonDestroyEl.addEventListener("click", onDestroyEl);

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }
  return elements;
}

function onCreateEl() {
  const elementsBoxes = createBoxes(inputEl.value);
  boxesEl.append(...elementsBoxes);
}

function onDestroyEl() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
