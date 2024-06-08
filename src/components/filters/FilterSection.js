import Search from "./Search";
import PureVegFilter from "./PureVegFilter";
import TopRatedFilter from "./TopRatedFilter";

const FilterSection = () => {
  return (
    <div className="flex m-7">
      <Search />
      <PureVegFilter />
      <TopRatedFilter />
    </div>
  );
};

export default FilterSection;
