import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalery = document.querySelector('.gallery');

const galleryItem = ({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
}
const instance = basicLightbox.create(`<img class="img-modal" src="">`)

const closeImage = evt => {
    if (evt.code !== 'Escape') {
		return;
	}

	instance.close();
	window.removeEventListener('keydown', closeImage);
}

const openImage = evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const modal = instance.element().querySelector('.img-modal');
	modal.src = evt.target.dataset.source;
    
    window.addEventListener('keydown', closeImage);
	instance.show();
}

const galleryCards = galleryItems.map(galleryItem).join('');

divGalery.insertAdjacentHTML('afterbegin', galleryCards);
divGalery.addEventListener('click', openImage);