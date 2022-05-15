const inputText = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");

inputText.addEventListener ("blur", () => {
    if (inputText.value.length === Number(inputLength.dataset.length)) {
        inputText.classList.remove("invalid");
        inputText.classList.add("valid");
    } else {
        inputText.classList.remove("valid");
        inputText.classList.add("invalid");
    }
})

