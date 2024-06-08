import { pieceList } from "./pieces.js";
function generateBoard() {
let html='';

for (let row=1; row<9; row++) {
 for(let collumn =1; collumn <9; collumn ++) {


      if ((row+collumn)% 2 ===0 ) { 
            html+= ` <div class="cell js-cell cell-black" 
            id= ${row.toString() + collumn.toString()}>
          ${row.toString() + collumn.toString()}
         </div>`;
          }
      
      else {
            html+= ` <div class="cell js-cell" 
            id= ${row.toString() + collumn.toString()}>
            ${row.toString() + collumn.toString()}
            </div>`;
          }
    }

}







document.querySelector('.js-chessboard').innerHTML=html;


}


function placePiece(position,piece) {
  
      document.getElementById(1 +position).innerHTML=` <img src="../images/svg/w${piece}.svg" alt="" srcset="" class="chess-piece" draggable="true">`
      document.getElementById(8 +position).innerHTML=` <img src="../images/svg/b${piece}.svg" alt="" srcset="" class="chess-piece" draggable="true">`





      for(let i=1; i<9 ; i++) {
            document.getElementById(`${'2'+i}`).innerHTML=` <img src="../images/svg/wp.svg" alt="" srcset="" class="chess-piece" draggable="true">`  
            document.getElementById(`${'7'+i}`).innerHTML=` <img src="../images/svg/bp.svg" alt="" srcset="" class="chess-piece" draggable="true">`  
      }
}

generateBoard();



placePiece('1','r');
placePiece('8','r');
placePiece('2','n');
placePiece('7','n');
placePiece('3','b');
placePiece('6','b');
placePiece('4','q');
placePiece('5','k');



document.querySelectorAll('.chess-piece').forEach((piece)=> {
      piece.addEventListener('drag', (event) => {
         
            console.log(event);
      })

})



pieceList.forEach((piece) => {
    console.log(piece.type);
})