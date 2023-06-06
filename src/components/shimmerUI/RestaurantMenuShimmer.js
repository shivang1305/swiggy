const RestaurantMenuShimmer = () => {
  const shimmerItems = Array.from({ length: 8 }, (_, index) => index); // Generating an array of 8 shimmer items
  return (
    <div className="restaurant-menu-page">
      <h2 className="restaurant-menu-heading">Menu</h2>
      <div className="shimmer-items-container">
        {shimmerItems.map((item) => (
          <div className="shimmer-item" key={item}>
            <div className="shimmer-item-image"></div>
            <div className="shimmer-item-details">
              <div className="shimmer-item-name"></div>
              <div className="shimmer-item-description"></div>
              <div className="shimmer-item-price"></div>
              <div className="shimmer-item-button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
