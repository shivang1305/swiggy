import { useEffect } from "react";
import { SEARCH_LOCATION_API_URL } from "../utils/constants";
import { filterLocationAPIData } from "../utils/helperFunctions";

const useLocationSuggestion = (locationQuery, setLocationSuggestions) => {
  useEffect(() => {
    // debouncing
    const locationQueryTimer = setTimeout(() => {
      if (locationQuery != "") getSearchLocationSuggestions();
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
    setLocationSuggestions(filterLocationAPIData(jsonData));
  };
};

export default useLocationSuggestion;
