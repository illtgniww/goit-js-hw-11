import axios from 'axios';

export function getImagesByQuery(query) {
    const API_KEY = '57644288-12613f747784ed1ecbf29c2c7';
    const BASE_URL = 'https://pixabay.com/api/';

    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    }).then(response => {
        return response.data;
    });
}