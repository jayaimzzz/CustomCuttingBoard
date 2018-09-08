let board, column, cell, mainWrapper;
let width = 10;
let height = 14;
mainWrapper = document.getElementById('mainWrapper');

let designs = {};
designs.blank = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
]
designs.i = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','-','-','-','-',' ',' ',' '],
    [' ',' ',' ','A','-','-','/',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ','/','-','-','A',' ',' ',' '],
    [' ',' ',' ','-','-','-','-',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
]




function createBoard(){
    board = document.createElement('div');
    board.className = 'board'
    mainWrapper.appendChild(board)
    for (let x = 0; x < width; x++){
        column = document.createElement('div')
        column.id = 'column' + x;
        column.className = 'column';
        board.appendChild(column)
        for (let y = 0; y < height; y++){
            cell = document.createElement('div')
            cell.id = 'cellAtColumn' + x + 'Row' + y;
            cell.className = 'cell'
            column.appendChild(cell)
        }
    }
   
}

function styleBoard(design) {
    for (let x = 0; x < width; x++){
        for (let y = 0; y < height; y++){
            // console.log(designs[design][y][x])
            let cell = document.getElementById('cellAtColumn' + x + 'Row' + y)
            switch (designs[design][y][x]){
                case ' ':
                cell.className = 'cell b1';
                break;
                case 'A':
                cell.className = 'cell dash';
                break;
                case '/':
                cell.className = 'cell up';
                break;
                case '-':
                cell.className = 'cell down';
                break;
            }
        }
    }
    
}

createBoard();
styleBoard("i");