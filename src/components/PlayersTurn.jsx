import React from "react";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const PlayersTurn = ({ player }) => {
  return (
    <div className="w-fit md:px-4 md:py-2 px-2 py-1 flex justify-center items-center text-center bg-orange-500 rounded-lg">
      <p className="md:text-lg text-[.75rem] text-white">
        Player
        <span className="inline px-2 ">
          {player === 1 ? (
            <VscCircleLargeOutline className="inline md:text-2xl text-lg" />
          ) : (
            <VscClose className="inline md:text-2xl text-lg" />
          )}
          's
        </span>
        turn
      </p>
    </div>
  );
};

export default PlayersTurn;
