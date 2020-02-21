const game = [
    [2,0,1],
    [1,2,0],
    [1,0,2]
];
function ticTacToeCheck(board) {
    const win = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const boardState = [].concat(game[0],game[1],game[2]);
    console.log(boardState)
}
ticTacToeCheck(game)