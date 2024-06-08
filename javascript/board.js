const board = []


for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
        const cell = {
          collumn: col,
          row:row

        }
        board.push( cell);
    }
}

console.log(board);