import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // extract event listener logic to a seperate functions
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    // creating even listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      // removing created event listeners
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("online", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
