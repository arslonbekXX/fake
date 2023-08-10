const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const value = document.querySelector("#value");
incrementBtn.onclick = () => (value.innerText = (+value.innerText + 1).toString());
decrementBtn.onclick = () => (value.innerText = (+value.innerText - 1).toString());
