import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("USE EFFECT CALLED");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log("render");
  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
};

export default Profile;
