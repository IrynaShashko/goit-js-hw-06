const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = ingredients.map(el => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = el;
  return ingredient;  
})  
  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.append(...element);
