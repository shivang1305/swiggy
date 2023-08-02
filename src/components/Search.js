import { useState } from "react";

const Search = ({ allRestaurantData, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  // to search for restaurants
  const searchRestaurants = () => {
    console.log(allRestaurantData);
    let searchedRestaurant = allRestaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurant);
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
