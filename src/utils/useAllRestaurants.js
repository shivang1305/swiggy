import { useState, useEffect } from "react";
import { ALL_RESTAURANTS_API } from "./constants";

const useAllRestaurants = () => {
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return [allRestaurantData, filteredRestaurants];
};

export default useAllRestaurants;
