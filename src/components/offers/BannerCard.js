import { CDN_URL } from "../../utils/constants";

const BannerCard = ({ imageId }) => {
  return (
    <div className="min-w-fit mx-2 my-2 bg-white text-black rounded-lg hover:cursor-pointer">
      <img
        className="w-full object-cover h-64"
        alt="restaurant-logo"
        src={CDN_URL + imageId}
      />
    </div>
  );
};

export default BannerCard;
