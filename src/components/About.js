import React from "react";
import Profile from "./ProfileClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <Outlet />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-constructor");
  }

  componentDidMount() {
    console.log("Parent-component did mount");
  }

  render() {
    console.log("Parent-render");
    return (
      <div>
        <h1>About Us Page</h1>
        <Profile />
      </div>
    );
  }
}

export default About;
