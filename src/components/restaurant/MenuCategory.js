import { useState } from "react";
import MenuItem from "./MenuItem";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { getVegMenuItems } from "../../utils/helperFunctions";

const MenuCategory = ({ menuData, restaurantName, isVegFilter }) => {
  const [showMenuItems, setShowMenuItems] = useState(true);
  const [menuItemData, setMenuItemData] = useState(menuData.itemCards);

  const handleToggleMenuItems = () => {
    setShowMenuItems(!showMenuItems);
  };

  if (isVegFilter) {
    setMenuItemData(getVegMenuItems(menuData?.itemCards));
    console.log(getVegMenuItems(menuData?.itemCards));
  }

  return (
    <div>
      {/* Category Header */}
      <div className="p-4 my-4 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleToggleMenuItems}
        >
          <span className="font-bold text-lg">
            {menuData?.title} ({menuData?.itemCards?.length})
          </span>
          {showMenuItems ? (
            <AiFillCaretUp className="h-10" />
          ) : (
            <AiFillCaretDown className="h-10" />
          )}
        </div>
      </div>
      {/* Menu Items */}
      {showMenuItems &&
        menuItemData.map((menuItem) => (
          <MenuItem
            key={menuItem.card.info.id}
            menuItem={menuItem}
            restaurantName={restaurantName}
          />
        ))}
    </div>
  );
};

export default MenuCategory;
