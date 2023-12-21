import { render } from "@testing-library/react";
import Header from "../header/Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";

test("logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if logo is rendered or not
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(
    "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
  );
});

test("cart should have 0 items on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if logo is rendered or not
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe(" 🛒0 ");
});
