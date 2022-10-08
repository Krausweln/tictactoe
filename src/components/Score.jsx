import React from "react";

const Score = ({ score, player }) => {
  return (
    <div className="w-[10rem] h-[2rem] rounded-lg bg-orange-500 px-2 flex justify-center items-center text-white">
      <p>{`Player ${player}'s score : ${
        player === 1 ? score.p1 : score.p2
      }`}</p>
    </div>
  );
};

export default Score;
