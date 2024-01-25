import axios from 'axios';

const API_KEY = '40880317-a4a105d106528f1d9ba952a9b';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const searchImage = (q, page = 1) => {
  return instance.get(
    `/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
