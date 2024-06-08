import React from "react";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

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
        <Profile pageName="Profile Page" />
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-semibold text-sm">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
