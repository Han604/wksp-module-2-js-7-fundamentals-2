// tic tac toe
const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
]
const board = document.getElementById('board');
let currentPlayer = '1';
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
let COUNTER = 0

const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
player1.classList.add('active');
function youWin() {
    board.removeEventListener('click', handleClick);
    alert(`player ${currentPlayer} wins!`)
}
function verifyWin() {
    //rows
    if (game[0] === game[1] && game[1] === game[2]) youWin();
    if (game[3] === game[4] && game[4] === game[5]) youWin();
    if (game[6] === game[7] && game[7] === game[8]) youWin();
    //columns
    if (game[0] === game[3] && game[3] === game[6]) youWin();
    if (game[1] === game[4] && game[4] === game[7]) youWin();
    if (game[2] === game[5] && game[5] === game[8]) youWin();
    //diagnols
    if (game[0] === game[4] && game[4] === game[8]) youWin();
    if (game[6] === game[4] && game[4] === game[2]) youWin();
}
function togglePlayer() {
    currentPlayer = currentPlayer === '1' ? '2' : '1';
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}

function handleClick() {
    const cell = event.target.id;
    const currentCellDiv = document.getElementById(cell);
    const icon = (currentPlayer === '1') ? PLAYER_1_ICON : PLAYER_2_ICON;
    let cellId = cell.charAt(cell.length - 1);
    if (typeof game[cellId] === 'number') {
        currentCellDiv.innerText = icon;
        game[cellId] = icon;
        COUNTER += 1;
        if (COUNTER < 9) {
            verifyWin();
        // add value to game array
            console.log(game);
            togglePlayer();
        }
        else {
            alert ('Draw!');
        }

    }
}

board.addEventListener('click', handleClick);
//1. make tha board 3 x 3 (grid)
    // 1 board <div>
    // 9 cells
    // player 1 / player 2
    // indicate who's turn it is
//2. cells need to be clickable
    // if empty clicking adds value (x or o)
    // ** once there is a value it can't be changed any longer.
//3. board must be clearable
//4. players 1 and 2
    //flag or variable for current player
    //each player is assigned either 'x' or 'o'
//5. create an array of current cell values
    // refresh on each change
//6. create all win conditions
    //...