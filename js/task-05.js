const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");


inputText.addEventListener("input", (text) => {
    if (text.currentTarget.value === "") {
        outputText.textContent = "Anonymous";
    } else {
        outputText.textContent = text.currentTarget.value;
    }
})
