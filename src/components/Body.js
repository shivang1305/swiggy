import RestaurantCard from "./RestaurantCard";
import RestaurantsPageShimmer from "./shimmerUI/RestaurantsPageShimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import OffersCarousel from "./OffersCarousel";
import FilterSection from "./FilterSection";
import { useSelector } from "react-redux";
import { LOCATION_UNSERVICEABLE_URL } from "../utils/constants";

const Body = () => {
  useAllRestaurants([]);

  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  const backupItems = useSelector((store) => store.restaurants.backupItems);

  // if the location is unserviceable
  if (restaurantItems.length === 0) {
    return (
      <div className="text-center">
        <img
          src={LOCATION_UNSERVICEABLE_URL}
          alt="Location Unserviceable"
          className="w-96 mx-auto h-96 mb-2 mt-6"
        />
        <p className="font-bold text-2xl">Location Unserviceable</p>
        <p className="text-xl text-slate-400 mb-8">
          We don’t have any services here till now. Try changing location.
        </p>
      </div>
    );
  }

  // conditional rendering
  return backupItems.length === 0 ? (
    <RestaurantsPageShimmer />
  ) : (
    <div className="body mx-28">
      <OffersCarousel />

      <div>
        <hr className="mt-5" />
        <div className="text-3xl font-bold mt-8 ml-5">
          Restaurants with online food delivery
        </div>
        <FilterSection />
        <div className="flex flex-wrap mt-5" data-testid="restaurant-list">
          {restaurantItems.map((resData) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={resData.info.id}
                to={"/restaurant/" + resData.info.id}
              >
                <RestaurantCard resData={resData} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
