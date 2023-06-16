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
        <div className="internet-connection-section-online">Back Online</div>
      )}
    </div>
  );
};

export default OnlineSection;
