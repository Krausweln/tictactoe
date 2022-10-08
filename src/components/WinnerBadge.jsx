import React from "react";

const WinnerBadge = ({ text }) => {
  return (
    <div className="w-fit md:w-[10rem] md:py-2 md:px-4 px-2 py-1 bg-emerald-600 rounded-lg">
      <p className="md:text-lg text-[.75rem] text-white">{text}</p>
    </div>
  );
};

export default WinnerBadge;
