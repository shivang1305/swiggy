import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../../redux/slices/cartSlice";

const ClearCartDialog = ({ isOpen, onClose, setItemCount, menuItem }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-black">Clear Cart</h2>
        <p className="text-black">Do you want to replace cart items?</p>
        <div className="flex justify-between">
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              dispatch(clearCart());
              setItemCount(1);
              dispatch(addItem(menuItem));
              onClose();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearCartDialog;
