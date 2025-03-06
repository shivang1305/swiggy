import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Error from "./components/error/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import RestaurantMenu from "./components/restaurant/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartPage from "./components/cart/CartPage";
import About from "./components/About";
import Contact from "./components/Contact";
import LocationSidebar from "./components/sidebar/LocationSidebar";
import OrderSuccess from "./components/order/OrderSuccess";
import AuthSidebar from "./components/sidebar/AuthSidebar";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Shivang",
    email: "shivang@gmail.com",
  });

  return (
    <div className="app z-1">
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <LocationSidebar />
          <AuthSidebar />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/order-success",
        element: <OrderSuccess />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
