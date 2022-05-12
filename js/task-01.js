// const categoriesNumber = querySelectorAll(".")

const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesEl.length}`);

const titleEl = document.querySelector(".h2");
const title = [...titleEl].forEach(el =>  console.log(`Category:${el.textContent}`));