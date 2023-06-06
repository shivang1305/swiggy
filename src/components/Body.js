import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import RestaurantsPageShimmer from "./shimmerUI/RestaurantsPageShimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURANTS_API } from "../utils/constants";

const Body = () => {
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);

  // function to fetch the data
  const getAllRestaurants = async () => {
    const data = await fetch(ALL_RESTAURANTS_API);

    const jsonRestaurantList = await data.json();

    let restaurantData = jsonRestaurantList?.data?.cards[2]?.data?.data?.cards; // optional chaining

    setAllRestaurantData(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  // to search for restaurants
  const searchRestaurants = () => {
    let searchedRestaurant = allRestaurantData.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurant);
  };

  // to filter the restaurants on avg rating of above 4
  const filterRestaurants = () => {
    let highRatedRestaurants = allRestaurantData.filter(
      (res) => res.data.avgRating > 4
    );
    console.log(highRatedRestaurants);
    setFilteredRestaurants(highRatedRestaurants);
  };

  // conditional rendering
  return allRestaurantData.length === 0 ? (
    <RestaurantsPageShimmer />
  ) : (
    <div className="body">
      <div className="nav-bar">
        <div className="search">
          <input
            className="search-input"
            placeholder="Restaurant, Dish, Cuisine"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button className="search-btn" onClick={searchRestaurants}>
            Search
          </button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={filterRestaurants}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <h2>No restaurant found</h2>
      ) : (
        <div className="restaurant-container">
          {filteredRestaurants.map((resData) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={resData.data.id}
                to={"/restaurant/" + resData.data.id}
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
