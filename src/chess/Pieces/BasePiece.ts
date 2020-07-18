import Position from "../Position";
import { Color, File, Rank } from "../../types";

export default abstract class Piece {
  protected position: Position;
  constructor(protected readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
  abstract render(): string;
}
