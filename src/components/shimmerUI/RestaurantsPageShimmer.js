const RestaurantsPageShimmer = () => {
  const shimmerItems = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className="flex justify-center flex-wrap" data-testid="shimmer">
      {shimmerItems.map((item) => (
        <div key={item} className="mx-8 my-8 p-1 w-80 h-72 bg-gray-300"></div>
      ))}
    </div>
  );
};

export default RestaurantsPageShimmer;
