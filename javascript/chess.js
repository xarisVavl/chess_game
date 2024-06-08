
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


function placePawn(position,piece) {
  
      document.getElementById(1 +position).innerHTML=` <img src="../images/svg/w${piece}.svg" alt="" srcset="">`
      document.getElementById(8 +position).innerHTML=` <img src="../images/svg/b${piece}.svg" alt="" srcset="">`





      for(let i=1; i<9 ; i++) {
            document.getElementById(`${'2'+i}`).innerHTML=` <img src="../images/svg/wp.svg" alt="" srcset="" >`  
            document.getElementById(`${'7'+i}`).innerHTML=` <img src="../images/svg/bp.svg" alt="" srcset="">`  
      }
}

generateBoard();



placePawn('1','r');
placePawn('8','r');
placePawn('2','n');
placePawn('7','n');
placePawn('3','b');
placePawn('6','b');
placePawn('4','q');
placePawn('5','k');







