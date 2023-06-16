import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./shimmerUI/RestaurantMenuShimmer";
import { MENU_ITEM_IMAGE_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  return (
    <div className="restaurant-menu-page">
      <div className="restaurant-menu-page-header">
        <h2 className="restaurant-name-heading">{name}</h2>
        <div className="restaurant-nested-header-1">
          <div>
            <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
            <div className="restaurant-area-name">{areaName}</div>
          </div>
          <div className="restaurant-rating-box">
            <div className="restaurant-rating">{avgRating}⭐</div>
            <hr />
            <div className="restaurant-total-rating">{totalRatingsString}</div>
          </div>
        </div>
        <div className="restaurant-nested-header-2">
          <div className="restaurant-delivery-time">22 mins</div>
          <div className="restaurant-cost">{costForTwoMessage}</div>
        </div>
        <hr />
      </div>
      <div className="menu-items-container">
        {itemCards.map((menuItem) => (
          <div className="menu-item" key={menuItem.card.info.id}>
            <img
              className="menu-item-image"
              src={MENU_ITEM_IMAGE_URL + menuItem.card.info.imageId}
              alt={menuItem.card.info.name}
            />
            <div className="menu-item-details">
              <h3 className="menu-item-name">{menuItem.card.info.name}</h3>
              <p className="menu-item-description">
                {menuItem.card.info.description}
              </p>
              <p className="menu-item-price">
                ₹{menuItem.card.info.price / 100}
              </p>
              <button className="menu-item-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
