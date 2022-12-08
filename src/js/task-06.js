const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    return;
  }
  input.classList.add("invalid");
  if (input.classList.contains("valid")) {
    input.classList.remove("valid");
  }
});
