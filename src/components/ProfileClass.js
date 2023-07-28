import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };

    console.log("Child - constructor");
  }

  async componentDidMount() {
    // best place to do API calls
    // as it is called after constructor() and render()
    const profileData = await fetch("https://api.github.com/users/shivang1305");
    const jsonProfileData = await profileData.json();

    console.log(jsonProfileData);

    this.setState({
      userInfo: jsonProfileData,
    });
    console.log("Child - component did mount");
  }

  componentWillUnmount() {
    console.log("Child-Component will unmount");
  }

  render() {
    console.log("Child - render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h2>Profile Page</h2>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default Profile;
