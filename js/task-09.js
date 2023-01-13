const ref = {
  buttonEl: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorEl: document.querySelector("span.color"),
};

ref.buttonEl.addEventListener("click", onColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorBody() {
  let color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.colorEl.textContent = color;
}
