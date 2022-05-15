function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const backgroundColor = document.querySelector(".color");

const changeColorBtn = () => {
  body.style.backgroundColor = getRandomHexColor();
  backgroundColor.textContent = body.style.backgroundColor;
}

colorBtn.addEventListener("click", changeColorBtn);

