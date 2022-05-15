const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (text) => {
    outputText.textContent = text.currentTarget.value;
})