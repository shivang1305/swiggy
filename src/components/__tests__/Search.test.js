import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../body/Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer cards should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(16);
});

test("Restaurant cards should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const restaurantList = body.getByTestId("restaurant-list");

  expect(restaurantList.children.length).toBe(15);
});

test("Search String(Food) in the search box in homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const searchBtn = body.getByTestId("search-btn");
  await waitFor(() => expect(searchBtn));

  const input = body.getByTestId("search-input");

  // fireEvent is used to mock a event on jsdom
  fireEvent.change(input, {
    target: {
      value: "Food",
    },
  });

  fireEvent.click(searchBtn);

  const restaurantList = body.getByTestId("restaurant-list");

  expect(restaurantList.children.length).toBe(5);
});
