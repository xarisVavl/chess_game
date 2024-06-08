
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

generateBoard();

document.getElementById('11').innerHTML=` <img src="../pawn-images/svg/wr.svg" alt="" srcset="">`
document.getElementById('18').innerHTML=` <img src="../pawn-images/svg/wr.svg" alt="" srcset="">`
document.getElementById('12').innerHTML=` <img src="../pawn-images/svg/wn.svg" alt="" srcset="">`
document.getElementById('17').innerHTML=` <img src="../pawn-images/svg/wn.svg" alt="" srcset="">`
document.getElementById('13').innerHTML=` <img src="../pawn-images/svg/wb.svg" alt="" srcset="">`
document.getElementById('16').innerHTML=` <img src="../pawn-images/svg/wb.svg" alt="" srcset="">`
document.getElementById('14').innerHTML=` <img src="../pawn-images/svg/wq.svg" alt="" srcset="">`
document.getElementById('15').innerHTML=` <img src="../pawn-images/svg/wk.svg" alt="" srcset="">`


document.getElementById('81').innerHTML=` <img src="../pawn-images/svg/br.svg" alt="" srcset="">`
document.getElementById('88').innerHTML=` <img src="../pawn-images/svg/br.svg" alt="" srcset="">`
document.getElementById('82').innerHTML=` <img src="../pawn-images/svg/bn.svg" alt="" srcset="">`
document.getElementById('87').innerHTML=` <img src="../pawn-images/svg/bn.svg" alt="" srcset="">`
document.getElementById('83').innerHTML=` <img src="../pawn-images/svg/bb.svg" alt="" srcset="">`
document.getElementById('86').innerHTML=` <img src="../pawn-images/svg/bb.svg" alt="" srcset="">`
document.getElementById('84').innerHTML=` <img src="../pawn-images/svg/bq.svg" alt="" srcset="">`
document.getElementById('85').innerHTML=` <img src="../pawn-images/svg/bk.svg" alt="" srcset="">`


for(let i=1; i<9 ; i++) {
      document.getElementById(`${'2'+i}`).innerHTML=` <img src="../pawn-images/svg/wp.svg" alt="" srcset="" >`  
      document.getElementById(`${'7'+i}`).innerHTML=` <img src="../pawn-images/svg/bp.svg" alt="" srcset="">`  
}