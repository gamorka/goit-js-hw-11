import { fetchImages } from './pixabay-api.js';
import { clearGallery, renderImages, showLoader, hideLoader } from './render-functions.js';
import iziToast from 'izitoast';

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.querySelector('#search-input').value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const images = await fetchImages(query);
        hideLoader();
        if (images.length === 0) {
            iziToast.warning({
                title: 'Warning',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            renderImages(images);
        }
    } catch (error) {
        hideLoader();
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later!',
        });
        console.error(error);
    }
});
