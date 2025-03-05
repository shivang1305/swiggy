import { useEffect } from "react";
import { getAllRestaurantAPI } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  fillAllRestaurants,
  fillBackupRestaurants,
  putCarouselItems,
  setUnserviceable,
} from "../redux/slices/restaurantsSlice";

const useAllRestaurants = () => {
  const dispatch = useDispatch();
  const location = useSelector((store) => store.location.location);
  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  const { lat, lng } = location;

  useEffect(() => {
    restaurantItems.length === 0 && getAllRestaurants();
  }, [location]);

  // function to fetch the data
  const getAllRestaurants = async () => {
    try {
      const data = await fetch(getAllRestaurantAPI(lat, lng));

      const jsonData = await data.json();

      if (
        jsonData?.data?.communication?.swiggyNotPresent?.swiggyNotPresent ===
        true
      ) {
        dispatch(setUnserviceable());
        return;
      }

      const restaurantData =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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
    } catch (error) {
      console.log(error);
    }
  };
};

export default useAllRestaurants;
