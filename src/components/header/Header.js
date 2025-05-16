import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LOGO_URL } from "../../utils/constants";
import useOnline from "../../hooks/useOnline";
import OnlineSection from "./OnlineSection";
import OfflineSection from "./OfflineSection";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfCartItems } from "../../utils/helperFunctions";
import { openMenu } from "../../redux/slices/locationSlice";
import { removeUser, setUser } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import LoggedInUser from "./LoggedInUser";
import LoginHeader from "./LoginHeader";

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  const currentLocation = useSelector((store) => store.location.location);
  const user = useSelector((store) => store.authentication.user);

  const dispatch = useDispatch();
  let cartItemsCount = getNumberOfCartItems(cartItems);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const filteredUserData = {
          uid: user.uid,
          phoneNumber: user?.phoneNumber,
          displayName: user?.displayName || "",
          email: user?.email || "",
        };
        dispatch(setUser(filteredUserData));
      } else dispatch(removeUser());
    });
  }, []);

  return (
    <div>
      {!isOnline && <OfflineSection />}
      {isOnline && <OnlineSection />}
      <div className="flex justify-between shadow-md border border-gray-200">
        <div className="flex">
          <div className="logo-container m-6 ml-8 h-12 w-12  hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/">
              <img data-testid="logo" className="w-52" src={LOGO_URL} />
            </Link>
          </div>
          <button
            className="location-container justify-center my-12 font-semibold hover:cursor-pointer"
            onClick={() => {
              dispatch(openMenu());
            }}
          >
            {currentLocation?.name}🔻
          </button>
        </div>
        <div className="py-5">
          <ul className="text-2xl flex list-none">
            <li>
              <Link to="/about">
                <div className="flex hover:cursor-pointer mx-4 hover:text-orange-500">
                  <LuSearch className="mt-5 ml-4" />
                  <button className="py-5 h-12 w-16 font-semibold text-xl">
                    Find
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="flex hover:cursor-pointer mx-4 hover:text-orange-500">
                  <BiSolidOffer className="mt-5 ml-4" />
                  <button className="py-5 h-12 w-16 font-semibold text-xl">
                    Offers
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="flex hover:cursor-pointer mx-4 hover:text-orange-500">
                  <IoHelpBuoyOutline className="mt-5 ml-4" />
                  <button className="py-5 h-12 w-16 font-semibold text-xl">
                    Help
                  </button>
                </div>
              </Link>
            </li>
            <li>
              {user ? (
                <LoggedInUser
                  user={user}
                  onProfile={() => navigate("/about")}
                  onLogout={() => signOut(auth)}
                />
              ) : (
                <LoginHeader />
              )}
            </li>
            <li>
              <Link to="/cart" data-testid="cart">
                <div className="flex hover:cursor-pointer mx-4 hover:text-orange-500">
                  <IoCartOutline className="mt-5 ml-4" />
                  <button className="py-5 h-12 w-6 font-semibold text-xl">
                    {cartItemsCount}
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
