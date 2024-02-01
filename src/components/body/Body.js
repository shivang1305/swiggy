import RestaurantCard, {
  withLabelRestaurant,
} from "../restaurant/RestaurantCard";
import RestaurantsPageShimmer from "../shimmerUI/RestaurantsPageShimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../../hooks/useAllRestaurants";
import OffersCarousel from "../offers/OffersCarousel";
import FilterSection from "../filters/FilterSection";
import { useSelector } from "react-redux";
import Unserviceable from "../error/Unserviceable";

const Body = () => {
  useAllRestaurants([]);

  const restaurantItems = useSelector(
    (store) => store.restaurants.restaurantItems
  );

  const backupItems = useSelector((store) => store.restaurants.backupItems);
  const isUnserviceable = useSelector(
    (store) => store.restaurants.isUnserviceable
  );

  // get the modified restaurant card with a label
  const LabeledRestaurantCard = withLabelRestaurant(RestaurantCard);

  // if the location is unserviceable
  if (isUnserviceable) return <Unserviceable />;

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
                {resData?.info?.loyaltyDiscoverPresentationInfo ? (
                  <LabeledRestaurantCard resData={resData} />
                ) : (
                  <RestaurantCard resData={resData} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
