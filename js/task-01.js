const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesItem.length}`);
categoriesItem.forEach(function (el) {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});