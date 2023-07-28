import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user2 } = useContext(UserContext);
  user2.name = "test";
  return (
    <footer className="footer-container">
      <hr />
      <div>
        <div className="footer">
          <ul className="flex list-none text-lg font-medium text-gray-500">
            <li className="p-3 m-3">About us</li>
            <li className="p-3 m-3">Company History</li>
            <li className="p-3 m-3">Our Team</li>
            <li className="p-3 m-3">Our Vision</li>
            <li className="p-3 m-3">Press Release</li>
          </ul>
          <h1 className="p-4 font-bold text-xl ">
            This webapp is developed by {user2.name} - {user2.email}
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
