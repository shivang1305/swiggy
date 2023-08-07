export const toggleFilter = (isFilterClicked, setIsFilterClicked) => {
  if (isFilterClicked) setIsFilterClicked(false);
  else setIsFilterClicked(true);
};
