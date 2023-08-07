import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { fillAllRestaurants } from "../utils/restaurantsSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const allRestaurantData = useSelector(
    (store) => store.restaurants.backupItems
  );

  const dispatch = useDispatch();

  // to search for restaurants
  const searchRestaurants = () => {
    let searchedRestaurant = allRestaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(fillAllRestaurants(searchedRestaurant));
  };

  return (
    <div className="search">
      <input
        data-testid="search-input "
        className="border-black border-2 rounded-lg p-1"
        placeholder="Restaurant, Dish, Cuisine"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        data-testid="search-btn"
        className="ml-3 cursor-pointer border-black border-2 rounded-lg p-1 bg-slate-300"
        onClick={searchRestaurants}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
