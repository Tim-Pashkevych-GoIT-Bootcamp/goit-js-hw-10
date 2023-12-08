// Import simpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';

/**
  |============================
  | Rendering Markup
  |============================
*/
const gallery = document.querySelector('ul.gallery');
gallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(
      ({ preview: smallImageLink, original: largeImageLink, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${largeImageLink}"><img class="gallery__image" src="${smallImageLink}" alt="${description}" /></a></li>`,
    )
    .join(''),
);

/**
  |============================
  | SimpleLightbox initialization
  |============================
*/
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
