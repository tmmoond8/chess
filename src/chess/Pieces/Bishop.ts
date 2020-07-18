import BasePiece from "./BasePiece";
import { Color, Rank, File } from "../../types";

const whiteBishop = "♗";
const blackBishop = "♝";

export default class Bishop extends BasePiece {
  constructor(protected readonly color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }
  render() {
    return this.color === "white" ? whiteBishop : blackBishop;
  }
}
