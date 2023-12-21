import { useState, useEffect } from "react";

const OnlineSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <div className="flex justify-center">
          <div className="flex justify-center bg-green-400 text-gray-600 w-1/3 text-lg">
            Back Online
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineSection;
