import BasePiece from "./BasePiece";
import { Color, Rank, File } from "../../types";

const whiteKing = "♔";
const blackKing = "♚";

export default class King extends BasePiece {
  constructor(protected readonly color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }

  render() {
    return this.color === "white" ? whiteKing : blackKing;
  }
}
