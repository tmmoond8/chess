import BasePiece from "./BasePiece";
import { Color, Range } from "../../types";

const whiteQueen = "♕";
const blackQueen = "♛";

export default class Queen extends BasePiece {
  constructor(protected readonly color: Color, x: Range, y: Range) {
    super(color, x, y);
  }
  render() {
    return this.color === "white" ? whiteQueen : blackQueen;
  }
}
