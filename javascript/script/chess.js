import { pieceList } from "../data/pieces.js";
import {board, generateBoard, generatePieces} from "../data/board.js";









document.querySelector('.js-chessboard').innerHTML=generateBoard();

















generatePieces();


document.querySelectorAll('.js-cell').forEach((cell)=> {

      cell.addEventListener("dragover",((event) => {
            event.preventDefault();
            event.target.id;
      }));


      cell.addEventListener("drop",((event) => {
          let end = event.target.id;
          let start =elementBeingDragged.dataset.position;
            event.preventDefault(); 



pieceList.forEach((piece) => {
      if(piece.type === elementBeingDragged.dataset.id) {
           if ( piece.move(start,end)) {
      event.target.append(elementBeingDragged);
      elementBeingDragged.dataset.position=event.target.id;
      console.log('drop allowed here' +event.target.id);
           }

           
      }
})
      


  
//    }

       
      }));

   

})




let elementBeingDragged;

document.querySelectorAll('.chess-piece').forEach((piece)=> {
      

      piece.addEventListener('dragstart', ((event) => {
            elementBeingDragged = event.target;
            console.log('dragging has started on ' + elementBeingDragged.dataset.position);
      }))

})


