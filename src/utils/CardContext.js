import { createContext } from "react";

const CardContext = createContext({
  card: {
    name: "wow momos",
    rating: "4.0 stars",
  },
});

export default CardContext;
