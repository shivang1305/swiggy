import MenuItem from "./MenuItem";

const MenuCategory = ({ menuData }) => {
  return (
    <div>
      {/* Category Header */}
      <div className="p-4 my-4 bg-gray-50 shadow-lg">
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
            {menuData.title} ({menuData.itemCards.length})
          </span>
          <span></span>
        </div>
      </div>
      {menuData.itemCards.map((menuItem) => (
        <MenuItem key={menuItem.card.info.id} menuItem={menuItem} name={name} />
      ))}
    </div>
  );
};

export default MenuCategory;
