import styled, { css } from "styled-components";
import { CaroBoardProps } from "../../interface/CaroStyled";

type BoardProps = {
  board: string[][];
  handleClick: (
    // e: React.MouseEventHandler<HTMLDivElement>,
    pos: [number, number]
  ) => void;
  size: number;
};

const CaroBoard = styled.div<CaroBoardProps>`
  width: 500px;
  height: 500px;
  display: grid;
  border: 1px solid #ddd;
  grid-template-columns: repeat(${(props) => props.size}, 1fr);
  grid-template-rows: repeat(${(props) => props.size}, 1fr);
`;

const CaroCol = styled.div`
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  .custom-x {
    color: blue;
  }

  .custom-o {
    color: red;
  }
`;

const Board = (props: BoardProps) => {
  return (
    <>
      <CaroBoard size={props.size}>
        {props.board.map((row, index_row) => (
          <>
            {row.map((item, index_col) => (
              <>
                <CaroCol
                  key={`${index_row}${index_col}`}
                  onClick={() => props.handleClick([index_row, index_col])}
                >
                  <span
                    className={
                      item === "X" ? "custom-x" : item === "O" ? "custom-o" : ""
                    }
                  >
                    {item}
                  </span>
                </CaroCol>
              </>
            ))}
          </>
        ))}
      </CaroBoard>
    </>
  );
};

export default Board;
