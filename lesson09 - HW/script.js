const game = [
    [2,0,1],
    [1,2,0],
    [1,0,2]
];
const game2 = [
    [2,1,1],
    [2,1,2],
    [1,2,2]
];
const game3 = [
    [1,2,1],
    [0,2,0],
    [1,0,2]
];
const game4 = [
    [1,2,1],
    [2,2,1],
    [1,1,2]
];
function ticTacToeCheck(board) {
    const win = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const boardState = [].concat(board[0],board[1],board[2]);
    let nullCounter = 0;
    let winner = undefined;
    win.forEach(item=>{
        if(boardState[item[0]] == boardState[item[1]] && boardState[item[1]] == boardState[item[2]]){
/*            console.log(item);
            console.log(boardState[item[0]], boardState[item[1]], boardState[item[2]])*/
            winner = boardState[item[0]];
        }
    });
    boardState.forEach(elem=>{
        elem == 0 ? nullCounter++ : nullCounter;
    });
    if(winner) return winner;
    if(nullCounter == 0) return 0;
    if(nullCounter > 0) return -1;
}
console.log(ticTacToeCheck(game));
console.log(ticTacToeCheck(game2));
console.log(ticTacToeCheck(game3));
console.log(ticTacToeCheck(game4));