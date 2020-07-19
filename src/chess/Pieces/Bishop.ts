import BasePiece from "./BasePiece";
import { Color, Range } from "../../types";

const whiteBishop = "♗";
const blackBishop = "♝";

export default class Bishop extends BasePiece {
  constructor(protected readonly color: Color, x: Range, y: Range) {
    super(color, x, y);
  }
  render() {
    return this.color === "white" ? whiteBishop : blackBishop;
  }
}
