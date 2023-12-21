import { useSelector } from "react-redux";
import BannerCard from "./BannerCard";

const OffersCarousel = () => {
  const allCarouselData = useSelector(
    (store) => store.restaurants.carouselItems
  );
  return (
    <div>
      <div className="text-3xl font-bold mx-5 my-5">Best Offers for You</div>
      <div className="flex overflow-x-auto">
        {allCarouselData.map((carouselCard) => {
          return (
            <BannerCard key={carouselCard.id} imageId={carouselCard.imageId} />
          );
        })}
      </div>
    </div>
  );
};

export default OffersCarousel;
