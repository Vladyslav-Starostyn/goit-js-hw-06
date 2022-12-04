const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onInput = () => (text.style.fontSize = `${input.value}px`);

onInput();
input.addEventListener("input", onInput);
