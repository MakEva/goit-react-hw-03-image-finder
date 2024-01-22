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

// const BASE_URL = 'https://pixabay.com/api';
// // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// //
// export async function searchImage({ search, page = 1, per_page }) {
//   const params = new URLSearchParams({
//     q: search,
//     page,
//     key: API_KEY,
//     image_tape: 'photo',
//     orientation: 'horizontal',
//     per_page,
//   });

//   const response = await axios.get(`${BASE_URL}/?${params}`);
//   return response.data;
// }
