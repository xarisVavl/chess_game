import { pieceList } from "../data/pieces.js";
import {board, generateBoard, generatePieces} from "../data/board.js";









document.querySelector('.js-chessboard').innerHTML=generateBoard();

















generatePieces();


document.querySelectorAll('.js-cell').forEach((cell)=> {

      cell.addEventListener("dragover",((event) => {
            event.preventDefault();
            console.log("you are draging over " + event.target.id);
      }));
      cell.addEventListener("dragenter",((event) => {
            console.log("you are entering somethhing over " + event.target.id); 
      }));
      cell.addEventListener("dragleave",((event) => {
            console.log("you are leaving somethhing over " + event.target.id); 
      }));
      cell.addEventListener("drop",((event) => {
            event.target.append(elementBeingDragged);
      }));
      cell.addEventListener("dragend",((event) => {
            console.log("the drag ended in  " + event.target.id); 
      }));



})




let elementBeingDragged;

document.querySelectorAll('.chess-piece').forEach((piece)=> {
      

      piece.addEventListener('dragstart', ((event) => {
            elementBeingDragged = event.target;
            console.log('dragging has started on ' + elementBeingDragged.dataset.id);
      }))

})


