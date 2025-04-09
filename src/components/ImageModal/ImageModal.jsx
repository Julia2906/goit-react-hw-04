import Modal from 'react-modal';
import React from 'react';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

const ImageModal = ({ onClose, image }) => {
  const isOpen = Boolean(image);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {image && (
        <>
          <button onClick={onClose}>X</button>
          <img src={image.urls.regular} alt={image.description} />
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
