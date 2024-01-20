import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const searchImages = (q, page, per_page = 12) => {
  return instance.get('/', {
    params: {
      key: '40677905-6b3bafbeacabf211fb6260d7f',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      page,
      per_page,
    },
  });
};
