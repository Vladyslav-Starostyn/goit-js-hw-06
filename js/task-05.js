const InputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

InputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.target.value;

  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";
  }
});
