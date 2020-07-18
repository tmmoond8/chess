import BasePiece from "./BasePiece";
import { Color, Rank, File } from "../../types";

const whitePawn = "♙";
const blackPawn = "♟";

export default class Pawn extends BasePiece {
  constructor(protected readonly color: Color, file: File, rank: Rank) {
    super(color, file, rank);
  }
  render() {
    return this.color === "white" ? whitePawn : blackPawn;
  }
}
