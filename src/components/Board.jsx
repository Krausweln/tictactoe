import React, { useEffect, useRef, useState } from "react";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import PlayersTurn from "./PlayersTurn";
import Score from "./Score";
import WinnerBadge from "./WinnerBadge";

const Board = () => {
  const [board, setBoard] = useState([
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9],
  ]);

  const [player, setPlayer] = useState(1);

  const [winner, setWinner] = useState(null);

  const [scores, setScores] = useState({
    p1: 0,
    p2: 0,
  });

  const computer = () => {
    let moves = 0;
    const randMove = Math.round(Math.random() * 9);
    const randIndex = Math.round(Math.random() * 3);
    const Move = randMove;
    const Index = randIndex;

    moves += 1;

    if (!winner && board[Index][Move] === 9) {
      handleBoardChange(Index, Move);
    } else if (
      board[0].includes(9) &&
      board[1].includes(9) &&
      board[2].includes(9)
    ) {
      computer();
    }

    console.log(Index);
    console.log(Move);
  };

  //   const b1 = useRef(null);
  //   const b2 = useRef(null);
  //   const b3 = useRef(null);
  //   const b4 = useRef(null);
  //   const b5 = useRef(null);
  //   const b6 = useRef(null);
  //   const b7 = useRef(null);
  //   const b8 = useRef(null);
  //   const b9 = useRef(null);

  const handleReset = () => {
    setBoard([
      [9, 9, 9],
      [9, 9, 9],
      [9, 9, 9],
    ]);
    setWinner(null);
  };

  const playAgain = () => {
    if (winner) {
      handleReset();
    }
  };

  const handleBoardChange = (x, y) => {
    // toggle the player
    if (!winner) {
      setPlayer((prev) => (prev === 1 ? (prev = 2) : (prev = 1)));
    } else {
      return;
    }

    // set the board value
    if (!winner) {
      setBoard((prev) => [...prev, (prev[x][y] = player)]);
    } else {
      return;
    }

    // reset winner
    if (winner) {
      setWinner(null);
    }

    // the loser gets to play first in the next round
    if (winner === 1) {
      setPlayer(2);
    } else if (player === 2) {
      setPlayer(1);
    }
  };

  const checkWinner = () => {
    if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
      setWinner(1);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p1 += 1;
        return copy;
      });
    } else if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
      setWinner(2);
      setScores((prev) => {
        let copy = Object.assign({}, prev);
        copy.p2 += 1;
        return copy;
      });
    } else if (
      !board[0].includes(9) &&
      !board[1].includes(9) &&
      !board[2].includes(9) &&
      !winner
    ) {
      setWinner(9);
    }
  };

  useEffect(() => {
    checkWinner();
    // if (player === 2) return computer();
    console.log(scores);
    console.log("winner " + winner);
    console.log("player " + player);
    console.table(board);
  }, [board]);

  const board1 = () => {
    if (board[0][0] === 9) {
      handleBoardChange(0, 0);
    } else {
      return null;
    }
  };
  const board2 = () => {
    if (board[0][1] === 9) {
      handleBoardChange(0, 1);
    } else {
      return null;
    }
  };
  const board3 = () => {
    if (board[0][2] === 9) {
      handleBoardChange(0, 2);
    } else {
      return null;
    }
  };

  const board4 = () => {
    if (board[1][0] === 9) {
      handleBoardChange(1, 0);
    } else {
      return null;
    }
  };
  const board5 = () => {
    if (board[1][1] === 9) {
      handleBoardChange(1, 1);
    } else {
      return null;
    }
  };
  const board6 = () => {
    if (board[1][2] === 9) {
      handleBoardChange(1, 2);
    } else {
      return null;
    }
  };

  const board7 = () => {
    if (board[2][0] === 9) {
      handleBoardChange(2, 0);
    } else {
      return null;
    }
  };
  const board8 = () => {
    if (board[2][1] === 9) {
      handleBoardChange(2, 1);
    } else {
      return null;
    }
  };
  const board9 = () => {
    if (board[2][2] === 9) {
      handleBoardChange(2, 2);
    } else {
      return null;
    }
  };

  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center bg-[#202020] gap-2">
      {/* <div
        className="fixed top-[32%] left-[10%]"
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        <p className="text-white">made by rizqi</p>
      </div> */}
      {winner ? (
        <div
          className="absolute w-full h-screen bg-[#252525] opacity-70 z-50 onDoubleClick={playAgain} text-center flex justify-center items-center"
          onDoubleClick={playAgain}
        >
          <p className="text-white text-2xl">
            <span>Double click / tap to play again </span>
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-between md:w-[30rem] w-[15rem]">
        {winner ? (
          <div
            className="text-white"
            style={{ width: winner ? "100%" : "w-fit" }}
          >
            {winner === 1 ? (
              <WinnerBadge text={"Player one wins"} />
            ) : winner === 2 ? (
              <WinnerBadge text={"Player two wins"} />
            ) : winner === 9 ? (
              <WinnerBadge text={"Draw"} />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        {winner ? "" : <PlayersTurn player={player} />}
      </div>
      <div className="md:w-[30rem] md:h-[33.5rem] w-[15rem] h-[18.875rem] grid grid-cols-3 grid-rows-3  rounded-lg antialiased gap-4">
        <div
          className="bg-white text-black flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board1}
        >
          {board[0][0] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[0][0] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board2}
        >
          {board[0][1] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[0][1] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board3}
        >
          {board[0][2] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[0][2] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board4}
        >
          {board[1][0] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[1][0] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board5}
        >
          {board[1][1] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[1][1] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board6}
        >
          {board[1][2] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[1][2] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board7}
        >
          {board[2][0] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[2][0] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board8}
        >
          {board[2][1] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[2][1] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-white flex justify-center items-center border border-black rounded-lg text-5xl subpixel-antialiased"
          onClick={board9}
        >
          {board[2][2] === 1 ? (
            <VscCircleLargeOutline />
          ) : board[2][2] === 2 ? (
            <VscClose />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-evenly md:w-[30rem] w-[15rem] items-center h-fit gap-2">
          <Score player={1} score={scores} />

          <Score player={2} score={scores} />
        </div>
      </div>
    </div>
  );
};

export default Board;
