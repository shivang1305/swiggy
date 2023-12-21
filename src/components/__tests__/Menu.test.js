import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../mocks/data";
import Header from "../header/Header";
import store from "../../redux/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getByTestId("add-btn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("Cart");

  expect(cart.innerHTML).toBe("🛒1");
});
