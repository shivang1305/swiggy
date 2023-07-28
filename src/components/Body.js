import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import RestaurantsPageShimmer from "./shimmerUI/RestaurantsPageShimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurantData, filteredRestaurants, setFilteredRestaurants] =
    useAllRestaurants([]);

  // to search for restaurants
  const searchRestaurants = () => {
    let searchedRestaurant = allRestaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurant);
  };

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
    <div className="body">
      <div className="flex m-7 mx-16 justify-between">
        <div className="search">
          <input
            data-testid="search-input "
            className="border-black border-2 rounded-lg p-1"
            placeholder="Restaurant, Dish, Cuisine"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            data-testid="search-btn"
            className="ml-3 cursor-pointer border-black border-2 rounded-lg p-1 bg-slate-300"
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <div className="ml-3 cursor-pointer border-black border-2 rounded-lg p-1 bg-slate-300">
          <button className="filter-btn" onClick={filterRestaurants}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <h2>No restaurant found</h2>
      ) : (
        <div
          className="flex flex-wrap justify-center"
          data-testid="restaurant-list"
        >
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
      )}
    </div>
  );
};

export default Body;
