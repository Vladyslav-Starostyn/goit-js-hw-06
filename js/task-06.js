const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", (event) => {
  if (
    event.target.value.length === Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    return;
  }

  inputEl.classList.add("invalid");
  if (inputEl.classList.contains("valid")) {
    inputEl.classList.remove("valid");
  }
});
