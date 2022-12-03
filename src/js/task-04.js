let counterValue = 0;
const valueEl = document.querySelector("#value");
const targetBtnDec = document.querySelector('[data-action="decrement"]');
const targetBtnInc = document.querySelector('[data-action="increment"]');

const onTargetBtnDecClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onTargetBtnIncClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

targetBtnDec.addEventListener("click", onTargetBtnDecClick);
targetBtnInc.addEventListener("click", onTargetBtnIncClick);
