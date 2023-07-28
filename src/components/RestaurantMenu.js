import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./shimmerUI/RestaurantMenuShimmer";
import { MENU_ITEM_IMAGE_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  // customized or user created hook
  // used to get restaurant menu data from the api
  const restaurantInfo = useRestaurantMenu(restaurantId);

  if (restaurantInfo === null) return <RestaurantMenuShimmer />;

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

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

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
          <div
            className="bg-slate-100 rounded-lg p-4 flex shadow"
            data-testid="menu"
            key={menuItem.card.info.id}
          >
            <img
              className="h-52 object-cover rounded-lg cursor-pointer"
              src={MENU_ITEM_IMAGE_URL + menuItem.card.info.imageId}
              alt={menuItem.card.info.name}
            />
            <div className="mt-4 ml-6">
              <h3 className="text-base font-bold mb-2">
                {menuItem.card.info.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {menuItem.card.info.description}
              </p>
              <p className="text-base font-bold mb-2">
                ₹{menuItem.card.info.price / 100}
              </p>
              <button
                className="bg-yellow-500 text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600"
                onClick={() => addItemToCart(menuItem)}
                data-testid="add-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
