function getLuckyTicket(obj){
    if(!Number(obj.max) || !Number(obj.min)) return new Error('Ошибка данных. Строка содержит символы. obj{min:string|number, max:string|number}');
    if(Number(obj.max) < Number(obj.min)) return new Error('Ошибка данных. Min значение не может быть больше Max');
    if(obj.max.toString().length > 6 || obj.min.toString().length > 6) return new Error('Ошибка данных. Длина номера билета не может быть более чем 6 цифер.');
    let resultObj = {
        simpleCount: 0,
        hardCount: 0,
    };
    const min = Number(obj.min);
    const max = Number(obj.max);

    //Simple Count method
    for(let i = min; i <= max; i++){
        if(i.toString().length > 3){
            let length = i.length;
            let arrleft = i.toString().split('');
            for(let a = 0; a < arrleft.length; a++){
                arrleft[a] = +arrleft[a];
            }
            let arrRight = arrleft.splice(length - 4, 3);
            let sumLeft = arrleft.reduce((sum, current)=>{
                sum += current;
                return sum;
            })
            let sumRight = arrRight.reduce((sum, current)=>{
                sum+=current;
                return sum;
            })
            if(sumRight == sumLeft){
                resultObj.simpleCount++;
            }
        }
    }

    //Hard Count method
    for(let i = min; i <= max; i++){
        let arr = i.toString().split('');
        for(let a = 0; a < arr.length; a++){
            arr[a] = +arr[a];
        }
        let equalSum = 0;
        let nEqualSum = 0;
        for(let j =0; j < arr.length; j++){
            if(arr[j] % 2){
                equalSum+=arr[j];
            }else{
                nEqualSum+=arr[j];
            }
        }
        if(nEqualSum == equalSum){
            resultObj.hardCount++;
        }
    }

    console.log(resultObj)
}
getLuckyTicket({min: 212325, max: 452370})