const RestaurantsPageShimmer = () => {
  const shimmerItems = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="shimmer-container">
      {shimmerItems.map((item) => (
        <div key={item} className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default RestaurantsPageShimmer;
