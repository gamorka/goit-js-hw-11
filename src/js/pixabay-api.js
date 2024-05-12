const API_KEY = '43842953-9dbca6afb64f09675f00184b1';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = (searchValue = '') => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      searchValue
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};