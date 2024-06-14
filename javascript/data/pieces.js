
import {board } from "./board.js"
 export const pieceList=  [
{
  type: "black-king",
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
  type: "black-queen",
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
  type: "black-knight",
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
  type: "black-bishop",
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
  type: "black-rook",
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
  type: "black-pawn",
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
  type: "white-king",
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
  type: "white-queen",
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
  type: "white-knight",
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
  type: "white-bishop",
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
  type: "white-rook",
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
  
   }
   else return false;
  }

},
{
  type: "white-pawn",
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
  
      
              pieceList.forEach((piece) => {
                    if(piece.type === elementBeingDragged.dataset.pieceType) {
                      
                    
                          if (piece.move(start,end)) {
                            
                              event.target.append(elementBeingDragged);
                              elementBeingDragged.dataset.piecePosition=event.target.id; ///na tsekarw edw-------------------------------
                          
                          
                              
                          }
            
                    }
                    
              })
        
         
        }));
  
     
  
  })
  
  
  
  
 
  
  
  
  
   }



  function dragStart(event) {
    elementBeingDragged = event.target;
    console.log('dragging has started with ' + elementBeingDragged.dataset.pieceType);

   console.log( isClearPath(elementBeingDragged));

  }


  function dragOver(event) {
        event.preventDefault();
   


        pieceList.forEach((piece) => {

          if(piece.type === elementBeingDragged.dataset.pieceType) {

                  start =elementBeingDragged.dataset.piecePosition
                  end =event.target.dataset.piecePosition; ///// na tsekarw edw---------------------------------
                  // console.log(start);
                   if (!end) end =event.target.id;///// na tsekarw edw---------------------------------
          
                  if ( piece.move(start,end) ) {
                        console.log(end );
                        let element= event.target;
                        if (element.classList.contains("chess-piece") && event.target.dataset.pieceColor !== elementBeingDragged.dataset.pieceColor)  {
                          element.remove();
                      
                      
                              }
                        }
                  }
            })
        }





export function isClearPath(elementBeingDragged) {

  if(elementBeingDragged.dataset.piecePosition % 10 ===1 ) {
              document.querySelectorAll('.chess-piece').forEach((piece) => {
                  let position = piece.dataset.piecePosition;
                  let color = piece.dataset.pieceColor;
            if (position % 10 ===1 &&  color === elementBeingDragged.dataset.pieceColor && position > elementBeingDragged.dataset.piecePosition) {
              console.log(piece.dataset.pieceType);

              if( position - elementBeingDragged.dataset.piecePosition ===10) {
                return false;
              }
              
            }
            
              })

  }

   return true;

}


  