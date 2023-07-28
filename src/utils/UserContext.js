import { createContext } from "react";

const UserContext = createContext({
  user1: {
    name: "Dummy name 1",
    email: "support1@gmail.com",
  },
  user2: {
    name: "Dummy name 2",
    email: "support2@gmail.com",
  },
});

export default UserContext;
