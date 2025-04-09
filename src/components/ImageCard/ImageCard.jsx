const ImageCard = ({ image }) => {
  const { urls, description } = image;

  return (
    <div>
      <img src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
