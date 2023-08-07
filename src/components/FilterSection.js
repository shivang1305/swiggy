import Search from "./Search";
import PureVegFilter from "./PureVegFilter";
import TopRatedFilter from "./TopRatedFilter";

const FilterSection = () => {
  return (
    <div>
      <div className="flex m-7 justify-between">
        <Search />
        <div className="flex">
          <PureVegFilter />
          <TopRatedFilter />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
