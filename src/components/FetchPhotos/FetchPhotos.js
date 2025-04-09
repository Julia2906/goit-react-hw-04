import axios from 'axios';

const ACCESS_KEY = 'sQIAw_PjrocTEAEhNduKVDQuhpihpkrKilxS6kdPVJ4';

export const fetchPhotos = async query => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data.results;
};
