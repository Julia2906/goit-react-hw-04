import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};

export default ImageGallery;
