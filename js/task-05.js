
const refs = {};
refs.inputEl = document.querySelector('#name-input');
refs.nameEl = document.querySelector('#name-output');

console.log(refs.inputEl);
console.log(refs.nameEl);

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    refs.nameEl.textContent = event.currentTarget.value;
  } else { refs.nameEl.textContent = 'незнакомец' };
}
