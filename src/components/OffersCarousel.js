import BannerCard from "./BannerCard";

const OffersCarousel = ({ allCarouselData }) => {
  return (
    <div>
      <div className="text-3xl font-bold mx-5 my-5">Best Offers for You</div>
      <div className="flex overflow-x-auto">
        {allCarouselData.map((carouselCard) => {
          return <BannerCard imageId={carouselCard.imageId} />;
        })}
      </div>
    </div>
  );
};

export default OffersCarousel;
