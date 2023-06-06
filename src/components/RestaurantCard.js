import { CDN_URL } from "../utils/constants";

// writing CSS in JSX
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  // destructuring the data object
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data; // optional chaining

  const styleCard = {
    // Inline styles for the restaurant card container
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="restaurant-title-container">
        <div className="restaurant-name">{name}</div>
        <div className="restaurant-cuisines" title={cuisines.join(", ")}>
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="restaurant-details-container">
        <div className="restaurant-card-footer">
          <span>{avgRating}⭐</span>
          <div>•</div>
          <div>{deliveryTime} MINS</div>
          <div>• </div>
          <div className="cost-for-two-container">
            ₹{costForTwo / 100} FOR TWO
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
