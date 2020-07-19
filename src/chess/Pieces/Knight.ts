import BasePiece from "./BasePiece";
import { Color, Range } from "../../types";

const whiteKnight = "♘";
const blackKnight = "♞";

export default class Knight extends BasePiece {
  constructor(protected readonly color: Color, x: Range, y: Range) {
    super(color, x, y);
  }

  render() {
    return this.color === "white" ? whiteKnight : blackKnight;
  }
}
