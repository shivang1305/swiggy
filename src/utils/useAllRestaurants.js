import { useEffect } from "react";
import { getAllRestaurantAPI } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fillAllRestaurants,
  fillBackupRestaurants,
  putCarouselItems,
} from "./restaurantsSlice";

const useAllRestaurants = () => {
  const dispatch = useDispatch();
  const location = useSelector((store) => store.location.location);

  const { lat, lng } = location;

  useEffect(() => {
    getAllRestaurants();
  }, [location]);

  // function to fetch the data
  const getAllRestaurants = async () => {
    const data = await fetch(getAllRestaurantAPI(lat, lng));

    const jsonData = await data.json();

    const restaurantData =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; // optional chaining

    const carouselData =
      jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    if (restaurantData) {
      dispatch(fillAllRestaurants(restaurantData));
      dispatch(fillBackupRestaurants(restaurantData));
      dispatch(putCarouselItems(carouselData));
    } else {
      dispatch(fillAllRestaurants([]));
      dispatch(fillBackupRestaurants([]));
      dispatch(putCarouselItems([]));
    }
  };
};

export default useAllRestaurants;
