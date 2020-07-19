import BasePiece from "./BasePiece";
import { Color, Range } from "../../types";

const whiteKing = "♔";
const blackKing = "♚";

export default class King extends BasePiece {
  constructor(protected readonly color: Color, x: Range, y: Range) {
    super(color, x, y);
  }

  render() {
    return this.color === "white" ? whiteKing : blackKing;
  }
}
