import Position from "../Position";
import { Color, Range } from "../../types";

export default abstract class Piece {
  protected position: Position;
  constructor(protected readonly color: Color, x: Range, y: Range) {
    this.position = new Position(x, y);
  }
  abstract render(): string;
}
