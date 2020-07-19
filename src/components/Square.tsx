/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useMemo } from "react";
import styled from "@emotion/styled";
import Position from "../chess/Position";
import Piece from "../chess/Pieces/BasePiece";

interface SquareProps {
  position: Position;
  Piece?: Piece;
}

export default function Square(props: SquareProps): JSX.Element {
  const { position, Piece } = props;
  const isDark = useMemo(() => position.isOdd(), [position]);
  return <StyledSquare isDark={isDark}>{Piece && Piece.render()}</StyledSquare>;
}

const StyledSquare = styled.li<{ isDark: boolean }>`
  background-color: ${(p) => (p.isDark ? "#75abbc" : "bbbbbb")};
  width: 10vw;
  height: 10vw;
`;
