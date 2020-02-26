function getLuckyTicket(obj){
    if(!Number(obj.max) || !Number(obj.min)) return new Error('Ошибка данных. Строка содержит символы. obj{min:string|number, max:string|number}');
    if(Number(obj.max) < Number(obj.min)) return new Error('Ошибка данных. Min значение не может быть больше Max');
    if(obj.max.toString().length > 6 || obj.min.toString().length > 6) return new Error('Ошибка данных. Длина номера билета не может быть более чем 6 цифер.');
    let resultObj = {
        winner: undefined,
        simpleCount: 0,
        hardCount: 0,
    };
    const min = Number(obj.min);
    const max = Number(obj.max);

    for(let i = min; i <= max; i++){
        //Hard Count method
        let arr = i.toString().split('');
        for(let a = 0; a < arr.length; a++){
            arr[a] = +arr[a];
        }
        let equalSum = 0;
        let nEqualSum = 0;
        arr.forEach(item=> {
            item % 2 ? equalSum += item : nEqualSum += item;
        });
        nEqualSum == equalSum && resultObj.hardCount++;
        //End Hard Count method

        //Simple Count method
        if(i.toString().length > 3){
            let length = i.length;
            let arrLeft = arr.concat();
            let arrRight = arrLeft.splice(length - 4, 3);
            let sumLeft = arrLeft.reduce((sum, current)=>{
                sum += current;
                return sum;
            });
            let sumRight = arrRight.reduce((sum, current)=>{
                sum+=current;
                return sum;
            });
            sumRight == sumLeft && resultObj.simpleCount++;
        }
        //End Simple Count Method
    }
    resultObj.hardCount > resultObj.simpleCount ? resultObj.winner = 'Hard Count Method' : resultObj.winner = 'Simple Count Method';
    resultObj.hardCount == resultObj.simpleCount ? resultObj.winner = 'Draw :)' : resultObj;
    return resultObj;
}
getLuckyTicket({min: 212325, max: 452370})