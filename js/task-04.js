

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
} 
const onIncrementBtnClick = () => {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
} 
decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);