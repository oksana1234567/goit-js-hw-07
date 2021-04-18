const refs = {};
refs.inputEl = document.querySelector('#font-size-control');
refs.textEl = document.querySelector('#text');

console.log(refs.inputEl);
console.log(refs.textEl);


const fontSiseChange = function(event) {
  refs.textEl.style.fontSize = event.currentTarget.value + 'px';
 };
 refs.inputEl.addEventListener('input', fontSiseChange);
