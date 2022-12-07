const ref = {
  input: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

ref.buttonCreate.addEventListener("click", onClickButtonCreate);
ref.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const arrayElements = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    arrayElements.push(div);
  }
  return arrayElements;
}

function onClickButtonCreate() {
  const addElements = createBoxes(ref.input.value);
  ref.divBoxes.append(...addElements);
}

function destroyBoxes() {
  ref.divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
