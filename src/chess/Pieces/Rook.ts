import BasePiece from "./BasePiece";
import { Color, Rank, File } from "../../types";

const whiteRook = "♖";
const blackRook = "♜";

export default class Rook extends BasePiece {
  constructor(protected readonly color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }
  render() {
    return this.color === "white" ? whiteRook : blackRook;
  }
}
