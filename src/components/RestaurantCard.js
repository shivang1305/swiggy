import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import CardContext from "../utils/CardContext";

// writing CSS in JSX
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { card } = useContext(CardContext);

  // destructuring the data object
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info; // optional chaining

  const styleCard = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="w-80 mx-8 my-8 bg-white text-black rounded-lg overflow-hidden shadow hover:cursor-pointer hover:border-rose-100 hover:border-2">
      <img
        className="w-full h-52 object-cover"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="p-2">
        <div className="text-xl font-bold mb-2">{name}</div>
        <div className="text-base" title={cuisines.join(", ")}>
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="p-2">
        <div className="mt-5 flex justify-between">
          <span>{avgRating}⭐</span>
          <div>•</div>
          <div>{deliveryTime} MINS</div>
          <div>• </div>
          <div className="cost-for-two-container">
            ₹{costForTwo / 100} FOR TWO
          </div>
        </div>
        <div>
          {card.name} - {card.rating}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
