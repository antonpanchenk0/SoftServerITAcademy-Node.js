function findChairForUs(rooms, count) {
    if(!count) return 'Game On';
    const roomsLength = rooms.length;
    let chairArr = [];
    let currentChair = count;
    for(let i = 0; i < roomsLength; i++){
        let peoples = rooms[i][0].length;
        if(rooms[i][1] > peoples){
            let chairs = rooms[i][1] - peoples;
            if(chairs <= currentChair){
                chairArr.push(chairs);
                currentChair-=chairs;
                if(currentChair == 0) return chairArr;
            } else{
                currentChair != 0 && chairArr.push(currentChair);
                return chairArr;
            }
        } else{
            chairArr.push(0);
        }
    }
    if(currentChair > 0) return 'Not enough!';
    return chairArr;
}
let room = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]];
console.log(findChairForUs(room, 4));
console.log(findChairForUs([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(findChairForUs([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));