import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const searchImages = (q, page = 1, perPage = 12) => {
  return instance.get('/', {
    params: {
      key: '40677905-6b3bafbeacabf211fb6260d7f',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
      page,
      q,
    },
  });
};
