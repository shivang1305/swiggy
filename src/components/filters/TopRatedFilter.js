import { useState } from "react";
import { toggleFilter } from "../../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  backupRestaurants,
  fillAllRestaurants,
} from "../../redux/slices/restaurantsSlice";

const TopRatedFilter = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  const dispatch = useDispatch();

  const handleFilterClicked = () => {
    if (!isFilterClicked) dispatch(fillAllRestaurants(filterTopRestaurants()));
    else dispatch(backupRestaurants());

    toggleFilter(isFilterClicked, setIsFilterClicked);
  };

  // to filter the restaurants on avg rating of above 4
  const filterTopRestaurants = () => {
    let highRatedRestaurants = restaurantItems.filter(
      (res) => res.info.avgRating > 4
    );
    return highRatedRestaurants;
  };

  return (
    <div
      className={`ml-3 cursor-pointer border-black border-2 rounded-lg p-2 ${
        isFilterClicked ? "bg-slate-400" : "bg-slate-300"
      }`}
    >
      <button className="filter-btn" onClick={() => handleFilterClicked()}>
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default TopRatedFilter;
