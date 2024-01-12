import { useState } from "react";
import MenuItem from "./MenuItem";
import { AiFillCaretDown } from "react-icons/ai";
import { getVegMenuItems } from "../../utils/helperFunctions";

const MenuCategory = ({ menuData, restaurantName, isVegFilter }) => {
  const [showMenuItems, setShowMenuItems] = useState(true);
  const [menuItemData, setMenuItemData] = useState(menuData);

  const handleToggleMenuItems = () => {
    setShowMenuItems(!showMenuItems);
  };

  if (isVegFilter) {
    setMenuItemData((showMenuItems.itemCards = getVegMenuItems(menuData)));
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
            {menuItemData?.title} ({menuItemData?.itemCards?.length})
          </span>
          <AiFillCaretDown className="h-10" />
        </div>
      </div>
      {/* Menu Items */}
      {showMenuItems &&
        menuItemData?.itemCards?.map((menuItem) => (
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
