import { CDN_URL } from "../../utils/constants";

// writing CSS in JSX
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructuring the data object
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; // optional chaining

  const { deliveryTime } = resData?.info.sla;

  const styleCard = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="w-80 mx-8 my-8 bg-white text-black rounded-lg overflow-hidden shadow-md border border-gray-200 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-40 object-cover"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="p-2">
        <div className="text-xl font-bold mb-2 truncate">{name}</div>
        <div className="text-gray-600 truncate" title={cuisines.join(", ")}>
          {cuisines.join(", ")}
        </div>
      </div>
      <div className="p-2">
        <div className="mt-1 flex justify-between">
          <span className="icon-star text-yellow-500 mr-1">{avgRating}⭐</span>
          <div>•</div>
          <div>{deliveryTime} MINS</div>
          <div>• </div>
          <div className="cost-for-two-container">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
