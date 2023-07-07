import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "support@gmail.com",
  },
});

export default UserContext;
