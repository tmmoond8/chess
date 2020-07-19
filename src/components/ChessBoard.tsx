/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Game from "../chess/Game";
import Square from "./Square";
import Position from "../chess/Position";

interface ChessBoardProps {}
const squares = Game.squares;
const pieces = Game.squares;

export default function ChessBoard(props: ChessBoardProps): JSX.Element {
  return (
    <StyledChessBoard>
      {squares.map((row) => (
        <Row>
          {row.map((square) => (
            <Square position={new Position(square)} />
          ))}
        </Row>
      ))}
    </StyledChessBoard>
  );
}

const StyledChessBoard = styled.ul``;

const Row = styled.ul`
  display: flex;
`;
