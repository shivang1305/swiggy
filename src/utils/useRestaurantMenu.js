import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    // console.log(MENU_API_URL + restaurantId);
    const data = await fetch(MENU_API_URL + restaurantId);

    const restaurantData = await data.json();
    setRestaurantInfo(restaurantData?.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
