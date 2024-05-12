import SimpleLightbox from 'simplelightbox';

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const lightbox = new SimpleLightbox('.gallery a');

    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');

        const link = document.createElement('a');
        link.setAttribute('href', image.largeImageURL);
        link.setAttribute('data-lightbox', 'gallery');
        
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;

        link.appendChild(img);
        card.appendChild(link);
        gallery.appendChild(card);
    });

    lightbox.refresh();
}

export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

