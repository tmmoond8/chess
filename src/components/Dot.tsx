import { PureComponent } from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import Position from "../chess/Position";
import Piece from "../chess/Pieces/BasePiece";

interface DotProps {
  position: Position;
  Piece?: Piece;
}

export default function Dot(props: DotProps): JSX.Element {
  const { position, Piece } = props;
  return <li>{Piece && Piece.render()}</li>;
}
