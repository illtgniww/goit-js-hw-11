import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = form.elements['search-text'].value.trim();
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }
    clearGallery()
    showLoader()
    const getImages = getImagesByQuery(query);
    getImages.then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            createGallery(data.hits);
        }
    }).catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images.',
            position: 'topRight',
        });
    }).finally(() => {
        hideLoader()
    })
}) 