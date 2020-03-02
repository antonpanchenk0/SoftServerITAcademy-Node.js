/**
 * Функция подсчитывает количество счасливых билетов 2 методами
 * Возвращает объект с количеством счастливых билетов
 * @param obj
 * @returns {{reason: string, status: string}|{winner: undefined, hardCount: number, simpleCount: number}}
 */
export function getLuckyTicket(obj){
    if(isNaN(Number(obj.max)) || isNaN(Number(obj.min))) return {status: 'failed', reason: "Ошибка данных. Строка содержит символы. obj{min:number, max:number}"};
    if(Number(obj.max) < Number(obj.min)) return {status: 'failed', reason: 'Ошибка данных. Min значение не может быть больше Max'};
    if(Number(obj.max) == 0 || Number(obj.max) == 0) return {status: 'failed', reason: 'Ошибка данных. Билет не может иметь нулевой номер.'};
    if(obj.max.toString().length > 6 || obj.min.toString().length > 6) return {status : 'failed', reason: 'Ошибка данных. Длина номера билета не может быть более чем 6 цифер.'};
    let resultObj = {
        winner: undefined,
        simpleCount: 0,
        hardCount: 0,
    };
    const min = Math.abs(Number(obj.min));
    const max = Math.abs(Number(obj.max));

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