import React from "react";
import { LOCATION_UNSERVICEABLE_URL } from "../../utils/constants";

const Unserviceable = () => {
  return (
    <div className="text-center">
      <img
        src={LOCATION_UNSERVICEABLE_URL}
        alt="Location Unserviceable"
        className="w-96 mx-auto h-96 mb-2 mt-6"
      />
      <p className="font-bold text-2xl">Location Unserviceable</p>
      <p className="text-xl text-slate-400 mb-8">
        We don’t have any services here till now. Try changing location.
      </p>
    </div>
  );
};

export default Unserviceable;
