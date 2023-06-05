import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="footer">
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>About us</li>
            <li>Company History</li>
            <li>Our Team</li>
            <li>Our Vision</li>
            <li>Press Release</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
