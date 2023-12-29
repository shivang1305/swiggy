import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../shimmerUI/RestaurantMenuShimmer";
import { MENU_ITEM_IMAGE_URL } from "../../utils/constants";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  // customized or user created hook
  // used to get restaurant menu data from the api

  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (!restaurantInfo) return <RestaurantMenuShimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="p-6 bg-slate-200">
      <div className="restaurant-menu-page-header">
        <h2 className="text-4xl font-bold mb-4">{name}</h2>
        <div className="flex justify-between">
          <div>
            <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
            <div className="restaurant-area-name">{areaName}</div>
          </div>
          <div className="items-center border-gray-300 border-solid border-2 shadow">
            <div className="restaurant-rating">{avgRating}⭐</div>
            <hr />
            <div className="restaurant-total-rating">{totalRatingsString}</div>
          </div>
        </div>
        <div className="flex mt-5 mb-5">
          <div className="font-semibold text-lg ml-3">22 mins</div>
          <div className="font-semibold text-lg ml-3">{costForTwoMessage}</div>
        </div>
        <hr />
      </div>
      <div className="menu-items-container">
        {itemCards.map((menuItem) => (
          <MenuItem
            key={menuItem.card.info.id}
            menuItem={menuItem}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
