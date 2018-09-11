let board, column, cell, mainWrapper;
let width = 10;
let height = 14;
mainWrapper = document.getElementById('mainWrapper');

let designs = {};
designs.blank = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]
designs.i = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'D', '-', '-', 'U', ' ', ' ', ' '],
    [' ', ' ', ' ', 'd', '-', '-', 'u', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '-', '-', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'n', '-', '-', 'b', ' ', ' ', ' '],
    [' ', ' ', ' ', 'N', '-', '-', 'B', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]




function createBoard() {
    board = document.createElement('div');
    board.className = 'board'
    mainWrapper.appendChild(board)
    for (let x = 0; x < width; x++) {
        column = document.createElement('div')
        column.id = 'column' + x;
        column.className = 'column';
        board.appendChild(column)
        for (let y = 0; y < height; y++) {
            cell = document.createElement('div')
            cell.id = 'cellAtColumn' + x + 'Row' + y;
            cell.className = 'cell'
            column.appendChild(cell)
        }
    }

}
function createSideBar() {
    let sideBarDiv = document.createElement('div');
    sideBarDiv.id = 'sideBarDiv';
    mainWrapper.appendChild(sideBarDiv);
}

function styleBoard(design, backgroundColor1, backgroundColor2, foregroundColor1, foregroundColor2) {

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let cell = document.getElementById('cellAtColumn' + x + 'Row' + y)
            let backgroundColor, foregroundColor;
            if ((x + y) % 2 === 0) {
                foregroundColor = foregroundColor1;
                backgroundColor = backgroundColor1;
            } else {
                foregroundColor = foregroundColor2;
                backgroundColor = backgroundColor2;
            }

            let smallDiagonal = document.createElement('img');
            smallDiagonal.className = 'cellImage';
            smallDiagonal.setAttribute('src', 'images/' + foregroundColor + '_small_dia.png');
            let largeDiagonal = document.createElement('img');
            largeDiagonal.className = 'cellImage';
            largeDiagonal.setAttribute('src', 'images/' + foregroundColor + '_large_dia.png');
            let thingie = designs[design][y][x]
            if (thingie !== '-') {
                cell.style.backgroundImage = 'url("images/' + backgroundColor + '01.png")';
            }
            if (thingie == 'd' || thingie == 'b' || thingie == 'n' || thingie == 'u') {
                cell.appendChild(smallDiagonal);
                cell.classList.add(thingie)
            }
            if (thingie == 'D' || thingie == 'B' || thingie == 'N' || thingie == 'U') {
                cell.appendChild(largeDiagonal);
                cell.classList.add(thingie)
            }
            if (thingie == '-') {
                cell.style.backgroundImage = 'url("images/' + foregroundColor + '01.png")';
            }
        }
    }

}

createBoard();
createSideBar();
styleBoard('i', 'walnut', 'maple', 'cherry', 'cherry');