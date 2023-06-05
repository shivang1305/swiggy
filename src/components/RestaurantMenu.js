import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    console.log(MENU_API_URL + restaurantId);
    const data = await fetch(MENU_API_URL + restaurantId);

    const restaurantData = await data.json();
    console.log(restaurantData.data);

    setRestaurantInfo(restaurantData?.data);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>

      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
