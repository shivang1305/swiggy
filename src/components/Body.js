import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import RestaurantsPageShimmer from "./shimmerUI/RestaurantsPageShimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import OffersCarousel from "./OffersCarousel";
import Search from "./Search";

const Body = () => {
  const [
    allRestaurantData,
    filteredRestaurants,
    setFilteredRestaurants,
    allCarouselData,
  ] = useAllRestaurants([]);

  // to filter the restaurants on avg rating of above 4
  const filterRestaurants = () => {
    let highRatedRestaurants = allRestaurantData.filter(
      (res) => res.info.avgRating > 4
    );
    // console.log(highRatedRestaurants);
    setFilteredRestaurants(highRatedRestaurants);
  };

  // conditional rendering
  return allRestaurantData.length === 0 ? (
    <RestaurantsPageShimmer />
  ) : (
    <div className="body mx-28">
      <OffersCarousel allCarouselData={allCarouselData} />
      {filteredRestaurants?.length === 0 ? (
        <h2>No restaurant found</h2>
      ) : (
        <div>
          <hr className="mt-5" />
          <div className="text-3xl font-bold mt-8 ml-5">
            Restaurants with online food delivery
          </div>
          <div className="flex m-7 justify-between">
            <Search
              allRestaurantData={allRestaurantData}
              setFilteredRestaurants={setFilteredRestaurants}
            />
            <div className="ml-3 cursor-pointer border-black border-2 rounded-lg p-1 bg-slate-300">
              <button className="filter-btn" onClick={filterRestaurants}>
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mt-5" data-testid="restaurant-list">
            {filteredRestaurants.map((resData) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  key={resData.info.id}
                  to={"/restaurant/" + resData.info.id}
                >
                  <RestaurantCard resData={resData} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
