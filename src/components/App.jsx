import { useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useState } from 'react';
import { fetchPhotos } from './FetchPhotos/FetchPhotos';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import Modal from 'react-modal';

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = query => {
    setSearchTerm(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchPhotos(searchTerm, page);
        setPhotos(prevPhotos => [...prevPhotos, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, searchTerm]);

  const loadMorePhotos = () => {
    setPage(prevPage => prevPage + 1);
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} openModal={openModal} />
      )}
      {loading && <Loader />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={loadMorePhotos} />
      )}
      {modalIsOpen && selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
};
export default App;
