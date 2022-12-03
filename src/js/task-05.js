const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("focus", () => {
  textInput.value = "Anonymous";
});

textInput.addEventListener("input", (event) => {
  output.textContent = event.target.value;
});
