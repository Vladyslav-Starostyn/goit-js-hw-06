const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

onInput();
inputEl.addEventListener("input", onInput);

function onInput() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
