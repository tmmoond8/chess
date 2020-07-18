import BasePiece from "./BasePiece";
import { Color, Rank, File } from "../../types";

const whiteQueen = "♕";
const blackQueen = "♛";

export default class Queen extends BasePiece {
  constructor(protected readonly color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }
  render() {
    return this.color === "white" ? whiteQueen : blackQueen;
  }
}
