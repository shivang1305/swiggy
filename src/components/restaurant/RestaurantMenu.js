import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../shimmerUI/RestaurantMenuShimmer";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { getAllCategories } from "../../utils/helperFunctions";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (!restaurantInfo) return <RestaurantMenuShimmer />;

  const menuItems =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = getAllCategories(menuItems);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = restaurantInfo?.cards[2]?.card?.card?.info;

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
