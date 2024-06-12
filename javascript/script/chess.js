import { pieceList, MovePiece, pathIsClear } from "../data/pieces.js";
import {board, generateBoard, generatePieces} from "../data/board.js";









document.querySelector('.js-chessboard').innerHTML=generateBoard();

















generatePieces();



pathIsClear();

 MovePiece ();