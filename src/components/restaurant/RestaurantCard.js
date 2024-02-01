import { CDN_URL, MEDIA_ASSET_URL } from "../../utils/constants";
import { getDiscountHeading } from "../../utils/helperFunctions";

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
    aggregatedDiscountInfoV3,
  } = resData?.info; // optional chaining

  const { deliveryTime } = resData?.info.sla;

  const styleCard = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="w-80 mx-8 my-8 bg-white text-black rounded-lg overflow-hidden shadow-md border border-gray-200 hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative drop-shadow-lg">
        {aggregatedDiscountInfoV3 && (
          <div className="p-1 m-1 w-full absolute bottom-0 text-white font-bold text-2xl">
            {getDiscountHeading(aggregatedDiscountInfoV3)}
          </div>
        )}
        <img
          className="w-full h-56 object-cover"
          alt="restaurant-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
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

export const withLabelRestaurant = (RestaurantCard) => {
  return ({ resData }) => {
    const { logo } = resData?.info?.loyaltyDiscoverPresentationInfo?.logoCtx;
    return (
      <div>
        <label className="absolute">
          <img src={MEDIA_ASSET_URL + "/" + logo} alt="label-logo" />
        </label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};

export default RestaurantCard;
