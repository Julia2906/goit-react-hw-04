const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} type="submit">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
