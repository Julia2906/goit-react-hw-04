import { useEffect } from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onClose, image }) => {
  const { urls, alt_description } = image;

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="modal-body">
        <img src={urls.regular} alt={alt_description} className="modal-image" />
      </div>
    </Modal>
  );
};

export default ImageModal;
