import { useState, useEffect } from "react";
import { getMenuAPIURL } from "../utils/constants";
import { useSelector } from "react-redux";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const location = useSelector((store) => store.location?.location);

  const { lat, lng } = location;

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(getMenuAPIURL(lat, lng, restaurantId));

    const restaurantData = await data.json();

    setRestaurantInfo(restaurantData?.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
