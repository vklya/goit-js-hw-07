import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector('.gallery');

const  galleryItem = ({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
    </a>
    </li>`
}

const galleryCards = galleryItems.map(galleryItem).join('');
ulGallery.insertAdjacentHTML('afterbegin', galleryCards);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});