let counterValue = 0;

const displayCounter = document.getElementById("value");
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  displayCounter.textContent = counterValue;
});

buttonPlus.addEventListener("click", () => {
  counterValue += 1;
  displayCounter.textContent = counterValue;
});
