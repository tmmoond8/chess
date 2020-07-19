import BasePiece from "./BasePiece";
import { Color, Range } from "../../types";

const whiteRook = "♖";
const blackRook = "♜";

export default class Rook extends BasePiece {
  constructor(protected readonly color: Color, x: Range, y: Range) {
    super(color, x, y);
  }
  render() {
    return this.color === "white" ? whiteRook : blackRook;
  }
}
