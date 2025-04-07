import { useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useState } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const ACCESS_KEY = 'sQIAw_PjrocTEAEhNduKVDQuhpihpkrKilxS6kdPVJ4';

  const handleSearch = async query => {
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);
      const data = await fetchPhotos('https://api.unsplash.com/search/photos', {
        params: {
          query,
          per_page: 15,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />}
    </>
  );
};
export default App;
