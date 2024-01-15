import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { fillBackupItems, fillMenuItems } from "../redux/slices/menuSlice";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(MENU_API_URL + restaurantId);

    const restaurantData = await data.json();
    setRestaurantInfo(restaurantData?.data);
    dispatch(
      fillMenuItems(
        restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards
      )
    );
    dispatch(
      fillBackupItems(
        restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards
      )
    );
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
