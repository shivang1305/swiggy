import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import RestaurantMenuShimmer from "./components/shimmerUI/RestaurantMenuShimmer";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user1, setUser1] = useState({
    name: "Shivang",
    email: "shivang@gmail.com",
  });
  const [user2, setUser2] = useState({
    name: "Aman",
    email: "aman@gmail.com",
  });
  const [card, setCard] = useState({
    name: "haldirams",
    rating: "3.9 stars",
  });
  return (
    <div className="app">
      <Provider store={store}>
        <UserContext.Provider value={{ user1, setUser1, user2, setUser2 }}>
          <Header />
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
        element: (
          <Suspense fallback={<RestaurantMenuShimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // no '/' is needed here as if we put "/profile" it will be treated as "localhost:1234/profile" instead of "localhost:1234/about/profile"
            element: <ProfileClass name="Shivang" />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h3>Loading.... </h3>}>
            <Contact />
          </Suspense>
        ),
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
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
