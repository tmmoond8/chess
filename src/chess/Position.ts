import { Range } from "../types";

export default class Position {
  constructor(private x: Range, private y: Range) {
    this.x = x;
    this.y = y;
  }
  isOdd() {
    return (this.x + this.y) % 2 === 1;
  }
}
