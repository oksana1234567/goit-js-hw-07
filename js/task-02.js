const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsContainerEl = document.querySelector('#ingredients');

const makeIngridients = ingredients => {
  return ingredients.map(ingredients => {
    const ingredientLi = document.createElement('li');
    console.log(ingredientLi);
ingredientLi.textContent = ingredients;
    return ingredientLi;
  });
};

const elements = makeIngridients(ingredients);
ingredientsContainerEl.append(...elements);