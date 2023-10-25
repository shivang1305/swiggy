import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/locationSlice";
import { GPS_IMG_URL } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.location.isMenuOpen);

  const dispatch = useDispatch();

  const sidebarClasses = isMenuOpen
    ? "absolute z-10 h-full w-80 bg-white top-0 left-0 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out"
    : "absolute z-10 h-full w-64 bg-white top-0 left-0 shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out";

  return (
    <div className={sidebarClasses}>
      <div className="p-4 border-b border-gray-300">
        <button
          onClick={() => dispatch(closeMenu())}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L10 10.586l6.293-6.293a1 1 0 111.414 1.414L11.414 12l6.293 6.293a1 1 0 01-1.414 1.414L10 13.414 3.707 19.707a1 1 0 01-1.414-1.414L8.586 12 2.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <input
          className="border-black border rounded-lg p-2 px-4 w-full"
          placeholder="Search for area, street name..."
        />
        <button className="border-black border rounded-lg p-2 px-2 w-full mt-14 flex">
          <img src={GPS_IMG_URL} alt="gps-img" className="h-7 w-7 mr-2" />
          Get current location using GPS
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
