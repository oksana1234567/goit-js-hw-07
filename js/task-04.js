

 const refs = {};
refs.container = document.querySelector('#counter');
refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
refs.value = refs.container.querySelector('#value');

console.log(refs.container);
console.log(refs.incrementBtn);
console.log(refs.decrementBtn);
console.log(refs.value);


let value = 0;
const doIncrement = function (step = 1) {
 value += step;
  refs.value.textContent = value;
  return value;
};

const doDecrement = function (step = 1) {
value -= step;
refs.value.textContent = value;
 return value;
};

refs.incrementBtn.addEventListener('click', () => {
console.log('+');
 doIncrement();
   });

refs.decrementBtn.addEventListener('click', () => {
 console.log('-');
  doDecrement();
   });