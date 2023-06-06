const RestaurantsPageShimmer = () => {
  const shimmerItems = Array.from({ length: 15 }, (_, index) => index);
  console.log(shimmerItems);
  return (
    <div className="shimmer-container">
      {shimmerItems.map((item) => {
        <div key={item} className="shimmer-card"></div>;
      })}
    </div>
  );
};

export default RestaurantsPageShimmer;
