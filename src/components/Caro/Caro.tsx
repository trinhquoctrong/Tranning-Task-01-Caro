import React, { FormEvent, useState } from "react";
import Board from "./Board";
import { winnerHelper } from "../helper/winnerHelper";
import { initBoard } from "../helper/initHelper";
import styled from "styled-components";

export type Board = {
  size: number;
  cells: string[][];
  xIsNext: boolean;
  count: number;
};

const Button = styled.button`
  padding: 4px 6px;
  background: #ff4949;
  font-size: 12px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const Caro = () => {
  const [size, setSize] = useState(10);
  const [tmpSize, setTmpSize] = useState(10);
  const [board, setBoard] = useState(initBoard(size));
  const [turn, setTurn] = useState(true);

  const winner = winnerHelper(board);

  // const sizeRef = useRef(10);

  const handleClick = (
    // e: React.MouseEventHandler<HTMLDivElement>,
    pos: [number, number]
  ) => {
    const newBoard = [...board];

    if (winner || newBoard[pos[0]][pos[1]]) return;

    newBoard[pos[0]][pos[1]] = turn ? "X" : "O";
    setBoard(newBoard);
    setTurn(!turn);
  };

  const handleButtonClick = () => {
    setBoard(initBoard(size));
    setTurn(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSize(tmpSize);
    setBoard(initBoard(tmpSize));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpSize(parseInt(e.target.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="re-size">Chọn kích thước: </label>
        <input
          type="number"
          id="re-size"
          min={10}
          max={20}
          defaultValue={10}
          step={1}
          onChange={handleInputChange}
        />
        <Button type="submit">OK</Button>
      </form>
      <Button onClick={handleButtonClick}>Reset</Button>

      <Board board={board} handleClick={handleClick} size={size} />

      {winner && (
        <>
          <div className="game-winner">
            <span style={{ color: "green", fontSize: "16px" }}>
              {winner ? (winner !== "draw" ? winner + " Win" : "Draw") : ""}
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Caro;
