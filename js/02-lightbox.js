import { galleryItems } from './gallery-items.js';
// Change code below this line

const items = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
  })
  .join('');

const galleryBox = document.querySelector('.gallery');
galleryBox.innerHTML = items;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
