import { useState, useEffect } from "react";
import { ALL_RESTAURANTS_API } from "./constants";

const useAllRestaurants = () => {
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allCarouselData, setAllCarouselData] = useState([]);

  useEffect(() => {
    getAllRestaurants();
  }, []);

  // function to fetch the data
  const getAllRestaurants = async () => {
    const data = await fetch(ALL_RESTAURANTS_API);

    const jsonData = await data.json();

    console.log("RESTAURANT DATA: ", jsonData);

    const restaurantData =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; // optional chaining

    const carouselData =
      jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    setAllRestaurantData(restaurantData);
    setFilteredRestaurants(restaurantData);
    setAllCarouselData(carouselData);
  };

  return [
    allRestaurantData,
    filteredRestaurants,
    setFilteredRestaurants,
    allCarouselData,
  ];
};

export default useAllRestaurants;
