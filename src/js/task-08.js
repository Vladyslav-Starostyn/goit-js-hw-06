const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log(alert("Please fill in all the fields!"));
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
