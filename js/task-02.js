const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(el => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = el;
  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.append(ingredient);
    }
  )
