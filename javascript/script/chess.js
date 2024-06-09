import { pieceList } from "../data/pieces.js";
import {board, generateBoard, generatePieces} from "../data/board.js";









document.querySelector('.js-chessboard').innerHTML=generateBoard();

















generatePieces();




document.querySelectorAll('.chess-piece').forEach((piece)=> {
      piece.addEventListener('drag', (event) => {
         
            console.log(event);
      })

})


