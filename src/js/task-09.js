const ref = {
  buttonColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorValue: document.querySelector(".color"),
};

ref.buttonColor.addEventListener("click", onClickButton);

function onClickButton() {
  let color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.colorValue.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
