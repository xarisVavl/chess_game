
import {board } from "./board.js"
 export const pieceList=  [
{
  type: "king",
  color: "black",
  image: "images/svg/bk.svg",
  initialPosition:[15],
  quantity:1,
  move:(start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ( rowDiff <= 1 && colDiff <= 1) {
      return true;
    }
else    return false;
  }
},
{
  type: "queen",
  color: "black",
  image: "images/svg/bq.svg",
  initialPosition:[14],
  quantity:1,
  move: (start, end, pieces) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ( rowDiff === colDiff || start % 10 === end % 10 || Math.floor(start / 10) === Math.floor(end / 10)) {
      return true;
    }
else    return false;
  }
  
},
{
  type: "knight",
  color: "black",
  image: "images/svg/bn.svg",
  initialPosition:[12,17],
  quantity:2,
  move:(start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
      return true;
    }
   else return false;
  }
  

},
{
  type: "bishop",
  color: "black",
  image: "images/svg/bb.svg",
  initialPosition:[13,16],
  quantity:2,
  move:(start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ( rowDiff === colDiff) {
      return true;
    }
  else  return false;
  }
},
{
  type: "rook",
  color: "black",
  image: "images/svg/br.svg",
  initialPosition:[11,18],
  quantity:2,
  move: (start, end) => {
    const startRow = Math.floor(start / 10);
    const startCol = start % 10;
    const endRow = Math.floor(end / 10);
    const endCol = end % 10;

   if ( startRow === endRow || startCol === endCol) {
    return true;
   }
 else   return false;
  }

},
{
  type: "pawn",
  color: "black",
  image: "images/svg/bp.svg",
  initialPosition:[21,22,23,24,25,26,27,28],
  quantity:8,
  move: (start,end) => {
    const diff = end - start;
    if ( diff ===10 || Math.floor(start / 10) === 2 && diff === 20) {
       return true;}
   else     return false;

  }

},

{
  type: "king",
  color: "white",
  image: "images/svg/wk.svg",
  initialPosition:[85],
  quantity:1,
  move:(start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ( rowDiff <= 1 && colDiff <= 1) {
      return true;
    }
  else   return false;
  }
},
{
  type: "queen",
  color: "white",
  image: "images/svg/wq.svg",
  initialPosition:[84],
  quantity:1,
  move: (start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ( rowDiff === colDiff || start % 10 === end % 10 || Math.floor(start / 10) === Math.floor(end / 10)) {
      return true;
    }
   else  return false;
  }
},
{
  type: "knight",
  color: "white",
  image: "images/svg/wn.svg",
  initialPosition:[82,87],
  quantity:2,
  move:(start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
      return true;
    }
  else   return false;
  }
  

},
{
  type: "bishop",
  color: "white",
  image: "images/svg/wb.svg",
  initialPosition:[83,86],
  quantity:2,
  move:(start, end) => {
    const rowDiff = Math.abs(Math.floor(start / 10) - Math.floor(end / 10));
    const colDiff = Math.abs(start % 10 - end % 10);

    if ( rowDiff === colDiff) {
      return true;
    }
   else  return false;
  }
},
{
  type: "rook",
  color: "white",
  image: "images/svg/wr.svg",
  initialPosition:[81,88],
  quantity:2,
    move: (start, end) => {
    const startRow = Math.floor(start / 10);
    const startCol = start % 10;
    const endRow = Math.floor(end / 10);
    const endCol = end % 10;

   if ( startRow === endRow || startCol === endCol) {
    return true;
   }
   else return false;
  }

},
{
  type: "pawn",
  color: "white",
  image: "images/svg/wp.svg",
  initialPosition:[71,72,73,74,75,76,77,78],
  quantity:8,
  move: (start,end) => {
    const diff = start -end;
    if ( diff ===10 || Math.floor(start / 10) === 7 && diff === 20) {
     
       return true;}
     else  return false;
  }

}


]

let barrier=100;
let elementBeingDragged;
let end;
let start;
export function MovePiece () {
  const squares= document.querySelectorAll('.js-cell');
  const pieces =document.querySelectorAll('.chess-piece');



        pieces.forEach((piece)=> {

          piece.addEventListener('dragstart', dragStart);

          })

      squares.forEach((cell)=> {
  
          cell.addEventListener("dragover", dragOver);

        
  
        cell.addEventListener("drop",((event) => {
              end = event.target.id;
              start =elementBeingDragged.dataset.piecePosition;
              event.preventDefault(); 
              const taken = event.target.classList.contains('chess-piece');

              
              pieceList.forEach((piece) => {

                    if(piece.type === elementBeingDragged.dataset.pieceType ) {
                      
                    
                          if (piece.move(start,end) && !taken) {
                            
                              event.target.append(elementBeingDragged);
                              elementBeingDragged.dataset.piecePosition=event.target.id; ///na tsekarw edw-------------------------------
                          
                          
                              
                          }
            
                    }
                    
              });
            
        
         
        }));
  
     
  
  })
  
  
  
  
 
  
  
  
  
   }



  function dragStart(event) {
    elementBeingDragged = event.target;
    console.log('dragging has started with ' + elementBeingDragged.dataset.pieceType);


  }


 function dragOver(event) {
    event.preventDefault();
    
    pieceList.forEach((piece) => {

      if(piece.type === elementBeingDragged.dataset.pieceType) {
   
              start =elementBeingDragged.dataset.piecePosition
              end =event.target.dataset.piecePosition; ///// na tsekarw edw---------------------------------
              // console.log(start);
               if (!end) end =event.target.id;///// na tsekarw edw---------------------------------
          
             
        
              if ( piece.move(start,end)  ) {
                    console.log(end );
                    let element= event.target;
                    if (element.classList.contains("chess-piece") && element.dataset.pieceColor !== elementBeingDragged.dataset.pieceColor)  {
                      element.remove();
                  
                  
                          }
                    }
              }
        })
    }







export function isClearPath(elementBeingDragged) {
//   let returnVal='true';
//   if  (elementBeingDragged.dataset.piecePosition %10 ===1 && (elementBeingDragged.dataset.pieceType.trim() === 'pawn' || elementBeingDragged.dataset.pieceType.trim() ==='rook')) {
//               document.querySelectorAll('.chess-piece').forEach((piece) => {
//                   let position = piece.dataset.piecePosition;
//                   let color = piece.dataset.pieceColor;
// if (elementBeingDragged.dataset.pieceColor.trim() === 'black' ) {


//             if (position % 10 ===1 &&  color === elementBeingDragged.dataset.pieceColor && position > elementBeingDragged.dataset.piecePosition) {
//               // console.log(piece.dataset.pieceColor);

//               if(  position - elementBeingDragged.dataset.piecePosition ===10) {
//                 returnVal= 'false';
//               }
              
//               else returnVal='true';
              
//             }

            

//           }
//           else if (elementBeingDragged.dataset.pieceColor.trim() === 'white') {
    
//                  if (position % 10 ===1 &&  color === elementBeingDragged.dataset.pieceColor && position < elementBeingDragged.dataset.piecePosition) {
//               // console.log(piece.dataset.pieceColor);
//               console.log(elementBeingDragged.dataset.piecePosition % 10);
//               if(  Math.abs(position - elementBeingDragged.dataset.piecePosition) ===10) {
//                 returnVal= 'false';
//               }
              
//               else returnVal='true';
              
//             }
//           }
            
//               })

//   }

//   else if  (elementBeingDragged.dataset.piecePosition %10 ===8 && (elementBeingDragged.dataset.pieceType.trim() === 'pawn' || elementBeingDragged.dataset.pieceType.trim() ==='rook')) {
//     document.querySelectorAll('.chess-piece').forEach((piece) => {
//         let position = piece.dataset.piecePosition;
//         let color = piece.dataset.pieceColor;
// if (elementBeingDragged.dataset.pieceColor.trim() === 'black') {


//   if (position % 10 ===8 &&  color === elementBeingDragged.dataset.pieceColor && position > elementBeingDragged.dataset.piecePosition) {
//     // console.log(piece.dataset.pieceColor);

//     if(  position - elementBeingDragged.dataset.piecePosition ===10) {
//       returnVal= 'false';
//     }
    
//     else returnVal='true';
    
//   }

  

// }
// else if (elementBeingDragged.dataset.pieceColor.trim() === 'white') {

//        if (position % 10 ===8 &&  color === elementBeingDragged.dataset.pieceColor && position < elementBeingDragged.dataset.piecePosition) {
//     // console.log(piece.dataset.pieceColor);
//     console.log(elementBeingDragged.dataset.piecePosition % 10);
//     if(  Math.abs(position - elementBeingDragged.dataset.piecePosition) ===10) {
//       returnVal= 'false';
//     }
    
//     else returnVal='true';
    
//   }
// }
  
//     })

// }
  



//    return returnVal;

}





  