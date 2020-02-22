const board = [
    [0,0,0,2,2,0],
    [0,3,0,0,0,0],
    [0,3,0,1,0,0],
    [0,3,0,1,0,0]
];
const attacks = [[2, 1], [1, 3], [4, 2]];

function damagedOrSunk(board, attacks){
    //Answer object
    let result ={
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0,
    };

    let damagedLog = []; //Damage log array

    const shipsOnBoard = [].concat(...board); //Make one-dimensional array from two-dimensional

    //Info about ships on start game and after attacks
    let shipsInfo = {
        firstTypeStart: 0,
        secondTypeStart: 0,
        thirdTypeStart: 0,
        firstTypeEnd: 0,
        secondTypeEnd: 0,
        thirdTypeEnd: 0,
    };

    //Count how many ships we have on our board
    shipsOnBoard.forEach(item=>{
        item == 1 && shipsInfo.firstTypeStart++;
        item == 2 && shipsInfo.secondTypeStart++;
        item == 3 && shipsInfo.thirdTypeStart++;
    });

    //Check data on correct information
    if(shipsInfo.firstTypeStart > 4 || shipsInfo.secondTypeStart > 4 || shipsInfo.thirdTypeStart > 4 || shipsInfo.thirdTypeStart < 1 || shipsInfo.secondTypeStart < 0 || shipsInfo.firstTypeStart < 0){
        return new Error('Incorrect long of ships.');
    }

    //Write log attack, what type we attack 0 - miss, 1 - first type of ships, 2 - second, 3 - third
    attacks.forEach(attack=>{damagedLog.push(board[board.length - attack[1]][attack[0]-1]);});

    //Count point by damaged and count how many ships we damaged
    damagedLog.forEach(item=>{
        if(item != 0){
            result.points+=.5;
            result.damaged++;
        }
        item == 1 && shipsInfo.firstTypeEnd++;
        item == 2 && shipsInfo.secondTypeEnd++;
        item == 3 && shipsInfo.thirdTypeEnd++;
    });

    //Checking first type of ships
    if(shipsInfo.firstTypeStart == shipsInfo.firstTypeEnd){
        result.sunk++;
        result.points++;
    };
    if(shipsInfo.firstTypeEnd == 0){
        result.points--;
        result.notTouched++;
    }

    //Checking second type of ships
    if(shipsInfo.secondTypeStart == shipsInfo.secondTypeEnd){
        result.sunk++;
        result.points++;
    };
    if(shipsInfo.secondTypeEnd == 0){
        result.points--;
        result.notTouched++;
    }

    //Checking third type of ships
    if(shipsInfo.thirdTypeStart == shipsInfo.thirdTypeEnd){
        result.sunk++;
        result.points++;
    };
    if(shipsInfo.thirdTypeEnd == 0){
        result.points--;
        result.notTouched++;
    }
    return  result;

};
console.log(damagedOrSunk(board, attacks))