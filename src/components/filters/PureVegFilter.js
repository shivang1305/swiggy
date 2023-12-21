import { useState } from "react";
import { toggleFilter } from "../../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  fillAllRestaurants,
  backupRestaurants,
} from "../../redux/slices/restaurantsSlice";

const PureVegFilter = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  const dispatch = useDispatch();

  const handleFilterClicked = () => {
    if (!isFilterClicked) dispatch(fillAllRestaurants(filterVegRestaurants()));
    else dispatch(backupRestaurants());

    toggleFilter(isFilterClicked, setIsFilterClicked);
  };

  // to filter the veg restaurants
  const filterVegRestaurants = () => {
    let vegRestaurants = restaurantItems.filter((res) => res?.info?.veg);
    return vegRestaurants;
  };
  return (
    <div
      className={`ml-3 cursor-pointer border-black border-2 rounded-lg p-2 ${
        isFilterClicked ? "bg-slate-400" : "bg-slate-300"
      }`}
    >
      <button className="filter-btn" onClick={() => handleFilterClicked()}>
        Pure Veg
      </button>
    </div>
  );
};

export default PureVegFilter;
