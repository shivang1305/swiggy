import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import RestaurantMenu from "./pages/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartPage from "./pages/CartPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

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
          <Sidebar />
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
        children: [
          {
            path: "profile", // no '/' is needed here as if we put "/profile" it will be treated as "localhost:1234/profile" instead of "localhost:1234/about/profile"
            element: <ProfileClass name="Shivang" />,
          },
        ],
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
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
