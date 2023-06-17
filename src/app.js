import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import RestaurantMenuShimmer from "./components/shimmerUI/RestaurantMenuShimmer";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
