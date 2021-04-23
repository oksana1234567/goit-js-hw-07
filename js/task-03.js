const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const galleryContainerEl = document.querySelector('#gallery');
// console.log(galleryContainerEl);

// const makeGallery = function (images) {
  
//   return images.map(images => {
    
//     galleryContainerEl.insertAdjacentHTML('beforeend', `<li class="galleryElement"> <img src="${images.url}" alt="${images.alt}" width="450px"/> </li>`);
//     return galleryContainerEl;
  
//   })
// }

// makeGallery(images);



// const galleryContainerEl = document.querySelector('#gallery');
// console.log(galleryContainerEl);
// let newLiElement = '';
// const makeGallery = function (images) {
  
//   return images.map(images => {
//     newLiElement = `<li class="galleryElement"> <img src="${images.url}" alt="${images.alt}" width="450px"/> </li>`;
//     console.log(newLiElement);
//     galleryContainerEl.insertAdjacentHTML('beforeend', newLiElement);
//     return galleryContainerEl;
  
//   })
// }

// makeGallery(images);

const galleryContainerEl = document.querySelector('#gallery');
console.log(galleryContainerEl);
let newLiElement = '';
let newLiElementCollection = [];

const makeLiElement = images => {
  return images.map(image => {
    newLiElement = `<li class="galleryElement"> <img src="${image.url}" alt="${image.alt}" width="450px"/> </li>`;
    return newLiElement;
  })
}

const elements = makeLiElement(images).join('');
galleryContainerEl.insertAdjacentHTML('beforeend', elements);