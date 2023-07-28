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

    console.log("RESTAURANT DATA: ", jsonRestaurantList);

    let restaurantData =
      jsonRestaurantList?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants; // optional chaining

    setAllRestaurantData(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  return [allRestaurantData, filteredRestaurants, setFilteredRestaurants];
};

export default useAllRestaurants;
