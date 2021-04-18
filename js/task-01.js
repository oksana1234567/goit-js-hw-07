const categoriesEl = document.querySelectorAll('.item');

const messageCategories = `В списке ${categoriesEl.length} категории.`;
console.log(messageCategories);

const categoriesElNames = categoriesEl.forEach(function (item) {
   const categoryName = item.firstElementChild.textContent;
     const categoryElementsQuantity = item.lastElementChild.children.length;
    
const messageItemsNames = `Категория: ${categoryName}`;
console.log(messageItemsNames);
const messageItemsQuantities = `Количество элементов: ${categoryElementsQuantity}`;
console.log(messageItemsQuantities);
});
