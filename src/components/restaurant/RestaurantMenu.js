import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../shimmerUI/RestaurantMenuShimmer";
import { MENU_ITEM_IMAGE_URL } from "../../utils/constants";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import MenuCategory from "./MenuCategory";
import {
  getAllCategories,
  getVegMenuItems,
  toggleFilter,
} from "../../utils/helperFunctions";
import { backupItems, fillMenuItems } from "../../redux/slices/menuSlice";

const RestaurantMenu = () => {
  const [isVegFilterClicked, setIsVegFilterClicked] = useState(false);
  const { restaurantId } = useParams();

  const dispatch = useDispatch();
  const menuItems = useSelector((store) => store.menu.menuItems);

  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (!restaurantInfo) return <RestaurantMenuShimmer />;

  const handleShowVegItemsOnly = () => {
    // if (!isVegFilterClicked) {
    // filter the restaurant menu items data
    let vegMenuItems = [];
    menuItems.map((menuItem) => {
      let { itemCards } = menuItem?.card?.card;
      const type = menuItem?.card?.card?.["@type"];
      if (
        type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        itemCards = getVegMenuItems(itemCards);

        const vegMenuItemObj = {
          ...menuItem?.card?.card,
        };

        delete vegMenuItemObj?.itemCards;
        vegMenuItemObj.itemCards = itemCards;
        // console.log(vegMenuItemObj);

        vegMenuItems.push(vegMenuItemObj);
      }
    });
    if (vegMenuItems) dispatch(fillMenuItems(vegMenuItems));
    // } else {
    //   dispatch(backupItems());
    // }

    // toggleFilter(isVegFilterClicked, setIsVegFilterClicked);
  };

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const categories = getAllCategories(menuItems);
  console.log(categories);

  return (
    <div className="p-6 w-9/12 mx-auto">
      <div className="restaurant-menu-page-header">
        <h2 className="text-4xl font-bold mb-4">{name}</h2>
        <div className="flex justify-between">
          <div>
            <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
            <div className="restaurant-area-name">{areaName}</div>
          </div>
          <div className="items-center border-gray-300 border-solid border-2 shadow">
            <div className="restaurant-rating">⭐ {avgRating.toFixed(1)}</div>
            <hr />
            <div className="restaurant-total-rating">{totalRatingsString}</div>
          </div>
        </div>
        <div className="flex mt-5 mb-5">
          <div className="font-semibold text-lg ml-3">22 mins</div>
          <div className="font-semibold text-lg ml-3">{costForTwoMessage}</div>
        </div>
        <button
          className="border border-black mb-2 p-2 m-2 shadow-lg rounded bg-gray-300"
          onClick={handleShowVegItemsOnly}
        >
          Veg
        </button>
        <hr />
        <hr />
      </div>
      <div className="menu-items-container">
        {categories.map((category) => (
          <MenuCategory
            key={category?.card?.card?.title}
            menuData={category?.card?.card}
            restaurantName={name}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
