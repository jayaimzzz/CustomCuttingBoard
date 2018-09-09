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
    [' ',' ',' ','D','-','-','U',' ',' ',' '],
    [' ',' ',' ','d','-','-','u',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ',' ','-','-',' ',' ',' ',' '],
    [' ',' ',' ','u','-','-','d',' ',' ',' '],
    [' ',' ',' ','U','-','-','D',' ',' ',' '],
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

function styleBoard(design,backgroundColor1, backgroundColor2, foregroundColor1, foregroundColor2) {

    for (let x = 0; x < width; x++){
        for (let y = 0; y < height; y++){
            let cell = document.getElementById('cellAtColumn' + x + 'Row' + y)
            let bottomImage = document.createElement('img');
            bottomImage.className = ('cellImage')
            let topImage = document.createElement('img');
            topImage.className = ('cellImage + topCellImage');
            (x + y) % 2 === 0?
            bottomImage.setAttribute('src', 'images/' + backgroundColor1 + '01.png') +
            topImage.setAttribute('src', 'images/' + foregroundColor1 + '01.png'):
            bottomImage.setAttribute('src', 'images/' + backgroundColor2 + '01.png') +
            topImage.setAttribute('src', 'images/' + foregroundColor2 + '01.png');
            let topImageDiv = document.createElement('div');
            topImageDiv.appendChild(topImage);
            bottomImage.className = ('cellImage')
            switch (designs[design][y][x]){
                case ' ':
                cell.appendChild(bottomImage);
                break;
                case 'd':
                // cell.appendChild(bottomImage);
                cell.appendChild(topImageDiv);
                cell.className = 'cell d';
                break;
                case 'D':
                cell.className = 'cell D';
                break;
                case 'u':
                cell.className = 'cell u';
                break;
                case 'U':
                cell.className = 'cell U';
                break;
                case '-':
                cell.className = 'cell -';
                cell.appendChild(topImageDiv);
                break;
            }
        }
    }
    
}

createBoard();
styleBoard('i','walnut', 'maple', 'cherry', 'cherry');