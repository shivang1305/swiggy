import { useEffect } from "react";
import { SEARCH_LOCATION_API_URL } from "./constants";

const useLocationSuggestion = (locationQuery, setLocationSuggestions) => {
  useEffect(() => {
    // debouncing
    const locationQueryTimer = setTimeout(() => {
      getSearchLocationSuggestions();
    }, 400);

    return () => {
      clearTimeout(locationQueryTimer);
    };
  }, [locationQuery]);

  const getSearchLocationSuggestions = async () => {
    const searchLocationRes = await fetch(
      `${SEARCH_LOCATION_API_URL}${locationQuery}`
    );
    const jsonData = await searchLocationRes.json();
    setLocationSuggestions(jsonData);
  };
};

export default useLocationSuggestion;
