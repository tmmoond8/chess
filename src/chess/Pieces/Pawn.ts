import BasePiece from "./BasePiece";
import { Color, Range } from "../../types";

const whitePawn = "♙";
const blackPawn = "♟";

export default class Pawn extends BasePiece {
  constructor(protected readonly color: Color, x: Range, y: Range) {
    super(color, x, y);
  }
  render() {
    return this.color === "white" ? whitePawn : blackPawn;
  }
}
