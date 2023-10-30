import { useEffect } from "react";
import { ALL_RESTAURANTS_API } from "./constants";
import { useDispatch } from "react-redux";
import {
  fillAllRestaurants,
  fillBackupRestaurants,
  putCarouselItems,
} from "./restaurantsSlice";

const useAllRestaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllRestaurants();
  }, []);

  // function to fetch the data
  const getAllRestaurants = async () => {
    const data = await fetch(ALL_RESTAURANTS_API);

    const jsonData = await data.json();

    const restaurantData =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; // optional chaining

    const carouselData =
      jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    dispatch(fillAllRestaurants(restaurantData));
    dispatch(fillBackupRestaurants(restaurantData));
    dispatch(putCarouselItems(carouselData));
  };
};

export default useAllRestaurants;
