import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

// export const getAllPosts = () => {
//   return instance.get('/');
// };

export const searchImages = (q, page = 1) => {
  return instance.get('/', {
    params: {
      key: '40677905-6b3bafbeacabf211fb6260d7f',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
      q,
    },
  });
};

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const fetchImages = async (query, page) => {
//   const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
//   const data = response.data;

//   return data;
// };
