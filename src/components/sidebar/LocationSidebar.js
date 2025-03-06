import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeMenu, setLocation } from "../../redux/slices/locationSlice";
import { GPS_IMG_URL, getCurrentLocationAPI } from "../../utils/constants";
import { useState } from "react";
import { getLocationPromise } from "../../utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import useLocationSuggestion from "../../hooks/useLocationSuggestion";

const LocationSidebar = () => {
  const isMenuOpen = useSelector((store) => store.location.isMenuOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [locationQuery, setLocationQuery] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  useLocationSuggestion(locationQuery, setLocationSuggestions);

  const onLocationSet = (suggestion) => {
    setLocationQuery(suggestion?.display_name);
    setLocationSuggestions([]);
    setLocationQuery("");

    const locationObj = {
      name: suggestion?.display_name,
      lat: suggestion?.lat,
      lng: suggestion?.lon,
    };

    dispatch(setLocation(locationObj));
    dispatch(closeMenu());
    navigate("/");
  };

  const currentLocationHandler = () => {
    getLocationPromise
      .then((location) => {
        console.log(location);
        getCurrentLocationName(location.latitude, location.longitude);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCurrentLocationName = async (lat, lng) => {
    const res = await fetch(getCurrentLocationAPI(lat, lng));
    const jsonData = await res.json();
    onLocationSet(jsonData);
  };

  const sidebarClasses = isMenuOpen
    ? "absolute z-10 h-full w-1/4 bg-white top-0 left-0 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out"
    : "absolute z-10 h-full w-1/4 bg-white top-0 left-0 shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out";

  return (
    <div className={sidebarClasses}>
      <div className="p-4 border-b border-gray-300">
        <button
          onClick={() => {
            setLocationQuery("");
            setLocationSuggestions([]);
            dispatch(closeMenu());
          }}
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
        <div className="border-black border rounded-lg p-2 px-4 w-full flex justify-between">
          <input
            className="w-full h-full outline-none"
            placeholder="Search for area, street name..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
          />
          <button
            className="text-orange-500 hover:cursor-pointer"
            onClick={() => setLocationQuery("")}
          >
            Cancel
          </button>
        </div>
        {locationSuggestions.length > 0 ? (
          <div className="absolute z-10 bg-white px-5 py-2 w-auto shadow-lg border border-gray-100">
            <ul>
              {locationSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => onLocationSet(suggestion)}
                >
                  {suggestion?.display_name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <button
            className="border-black border rounded-lg p-2 px-2 w-full mt-14 flex"
            onClick={() => currentLocationHandler()}
          >
            <img src={GPS_IMG_URL} alt="gps-img" className="h-7 w-7 mr-2" />
            Get current location using GPS
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationSidebar;
