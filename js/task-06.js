

const refs = {};
refs.inputEl = document.querySelector('#validation-input');
refs.lengthEl = document.querySelector('input[data-length = "6"]');
refs.inputEl.classList.add('validation-input');



let numberRequstedString = refs.lengthEl.dataset.length;

let numberRequsted = Number(numberRequstedString);

// const checkIfBlur = function () {
//   refs.inputEl.addEventListener('input', onInputChange) }

// refs.inputEl.addEventListener('blur', checkIfBlur);

// const onInputChange = function (event) {
//   if (event.currentTarget.value.length !== numberRequsted) {
//     refs.inputEl.classList.add('invalid');
//   } else {
    
//     refs.inputEl.classList.replace('invalid', 'valid')
//   }
// }

// const checkIfBlur = function () {
//   refs.inputEl.addEventListener('input', onInputChange) }



const onInputChange = function (event) {
  if (event.currentTarget.value.length !== numberRequsted) {
    refs.inputEl.classList.add('invalid');
    refs.inputEl.classList.remove('valid')
  } else {
    refs.inputEl.classList.remove('invalid')
    refs.inputEl.classList.add('valid')
    
  }
}

const checking = function () {
  refs.inputEl.addEventListener('blur', onInputChange)
};
checking();