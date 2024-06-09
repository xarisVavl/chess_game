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
              html+= ` <div class="cell js-cell cell-black" 
              id= ${cell.position}>
            ${cell.position}
           </div>`;
            }
        
        else {
              html+= ` <div class="cell js-cell" 
              id= ${cell.position}>
              ${cell.position}
              </div>`;
            }
        
            
  })
  return html;
  }

  export function generatePieces() {
  board.forEach((cell) => {

    pieceList.forEach((piece) => {
          piece.position.forEach((index)=> {
                if(Number(cell.position) === index) {
                      document.getElementById(index).innerHTML=`<img src="${piece.image}" alt="" srcset="" class="chess-piece" draggable="true">`
                }
          });
          })



})

}

