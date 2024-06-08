import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillAllRestaurants } from "../../redux/slices/restaurantsSlice";
import { SEARCH_IMG_URL } from "../../utils/constants";

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
    <div className="flex">
      <input
        data-testid="search-input "
        className="border-black border-2 rounded-lg p-2 w-full"
        placeholder="Restaurant, Dish, Cuisine"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        data-testid="search-btn"
        alt="search-img"
        src={SEARCH_IMG_URL}
        className="h-7 w-7 ml-2 mr-4 mt-1 hover:cursor-pointer"
        onClick={searchRestaurants}
      />
    </div>
  );
};

export default Search;
