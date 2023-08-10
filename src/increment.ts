const incrementBtn: HTMLButtonElement = document.querySelector("#increment")!;
const decrementBtn: HTMLButtonElement = document.querySelector("#decrement")!;
const value: HTMLSpanElement = document.querySelector("#value")!;

incrementBtn.onclick = () => (value.innerText = (+value.innerText + 1).toString());
decrementBtn.onclick = () => (value.innerText = (+value.innerText - 1).toString());
