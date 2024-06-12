import { pieceList } from "./pieces.js";

export const board = []


for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
        const cell = {
          collumn: col,
          row:row,
          position :row.toString() + col.toString()
        }
        board.push( cell);
    }
}

export function generateBoard() {

  let html = '';
  board.forEach((cell)=> {
             if ((cell.row + cell.collumn)% 2 ===0 ) { 
              html+= ` <div class="cell js-cell cell-black " 
              id= ${cell.position}>
            
           </div>`;
            }
        
        else {
              html+= ` <div class="cell js-cell" 
              id= ${cell.position} data-cell-position= "${cell.position}">
             
              </div>`;
            }
        
            
  })
  return html;
  }

  export function generatePieces() {
  board.forEach((cell) => {

    pieceList.forEach((piece) => {
          piece.initialPosition.forEach((index)=> {
                if(Number(cell.position) === index) {
                      document.getElementById(cell.position).innerHTML=`<img src="${piece.image}"  class="chess-piece" draggable="true" data-piece-position = "${index} "data-piece-type ="${piece.type}" id = "${index} " data-piece-color ="${piece.color} " >`
                }
          });
          })



})

}


//  console.log(document.getElementById(id).querySelector('.chess-piece'))





      
      
      
      
      
      
      
      
      

      
