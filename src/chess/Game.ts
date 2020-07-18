import King from "./Pieces/King";
import Queen from "./Pieces/Queen";
import Bishop from "./Pieces/Bishop";
import Knight from "./Pieces/Knight";
import Rook from "./Pieces/Rook";
import Pawn from "./Pieces/Pawn";
import { File } from "../types";

export default class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [
      // Kings
      new King("white", "e", 1),
      new King("black", "e", 8),
      // Queens
      new Queen("white", "d", 1),
      new Queen("black", "d", 8),
      // Bishops
      new Bishop("white", "c", 1),
      new Bishop("white", "f", 1),
      new Bishop("black", "c", 8),
      new Bishop("black", "f", 8),
      // Knights
      new Knight("white", "b", 1),
      new Knight("white", "g", 1),
      new Knight("black", "b", 8),
      new Knight("black", "g", 8),
      // Rooks
      new Rook("white", "a", 1),
      new Rook("white", "h", 1),
      new Rook("black", "a", 8),
      new Rook("black", "h", 8),
      // Pawns
      ...new Array(8)
        .fill(1)
        .map(
          (_, index) =>
            new Pawn("white", String.fromCharCode(97 + index) as File, 2)
        ),
      ...new Array(8)
        .fill(1)
        .map(
          (_, index) =>
            new Pawn("black", String.fromCharCode(97 + index) as File, 7)
        ),
    ];
  }
}
