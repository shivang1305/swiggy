import { useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";
import { addMenuData } from "../redux/slices/restaurantMenuSlice";
import { useDispatch, useSelector } from "react-redux";

const useRestaurantMenu = (restaurantId) => {
  const dispatch = useDispatch();

  const menuData = useSelector((store) => store.restaurantMenu?.menu);
  const resId = menuData?.cards[0]?.card?.card?.info?.id;

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(MENU_API_URL + restaurantId);

    const restaurantData = await data.json();
    dispatch(addMenuData(restaurantData?.data));
  };
};

export default useRestaurantMenu;
