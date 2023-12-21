import { useSelector, useDispatch } from "react-redux";
import { MENU_ITEM_IMAGE_URL } from "../../utils/constants";
import { addItem, clearCart, removeItem } from "../../redux/slices/cartSlice";
import { calcTotalAmount } from "../../utils/helperFunctions";
import { EMPTY_CART_IMAGE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <img
            src={EMPTY_CART_IMAGE_URL}
            alt="Empty Cart"
            className="w-1/3 mx-auto mb-4"
          />
          <p className="text-xl font-semibold text-gray-600 mb-4">
            Your cart is empty.
          </p>
          <Link to="/">
            <button className="bg-yellow-500 text-white text-base font-bold px-2 py-4 rounded cursor-pointer border-none hover:bg-yellow-600">
              Browse Restaurants Near You
            </button>
          </Link>
        </div>
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
              <div className="flex">
                <h2 className="text-lg font-bold mx-4">
                  {item.card.info.name}
                </h2>
                <div
                  className="bg-yellow-500 w-20 justify-between flex text-white text-base font-bold px-1 py-2 mx-4 rounded cursor-pointer border-none hover:bg-yellow-600"
                  data-testid="add-btn"
                >
                  <button onClick={() => dispatch(removeItem(item))}>-</button>
                  <div>{item.quantity}</div>
                  <button onClick={() => dispatch(addItem(item))}>+</button>
                </div>
                <h3 className="text-base font-semibold">
                  Price: Rs.
                  {(item.card.info.price.toFixed(2) / 100) * item.quantity}
                </h3>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <div className="font-semibold text-lg ml-28 mt-8">
              Total: Rs.{calcTotalAmount(cartItems)}
            </div>
            <div className="mt-8 flex justify-end">
              <button className="bg-green-400 text-white px-4 py-2 rounded">
                Checkout
              </button>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded ml-5"
                onClick={() => dispatch(clearCart())}
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
