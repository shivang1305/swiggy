import { useSelector, useDispatch } from "react-redux";
import { MENU_ITEM_IMAGE_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const calcTotalAmount = () => {
    let sum = 0;
    cartItems.map((item) => {
      sum += (item.card.info.price / 100) * item.quantity;
    });
    return sum;
  };

  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.card.info.id}
              className="flex items-center border-b border-gray-300 py-4"
            >
              <img
                src={MENU_ITEM_IMAGE_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-bold">{item.card.info.name}</h2>
                <p className="text-gray-600">
                  Quantity: {item.quantity} | Price: Rs.
                  {(item.card.info.price.toFixed(2) / 100) * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <div className="font-semibold text-lg ml-28 mt-8">
              Total: Rs.{calcTotalAmount()}
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-green-400 text-white px-4 py-2 rounded">
                Checkout
              </button>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded ml-5"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
