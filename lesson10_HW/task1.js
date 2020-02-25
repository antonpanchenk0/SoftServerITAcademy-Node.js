function plusMinus(arr, num){
    if(num > 10 || num < -10) return new Error('Range Error');
    if(arr.length < 2 || arr.length > 22) return new Error('Range Error');
    let sumPlus = arr[0];
    let sumMin = arr[0];
    for(let i = 1; i< arr.length; i++){
        if(arr[i] > 20 || arr[i] < 0 || arr[0] < 0 || arr[0] > 20) return new Error('Range Error');
        sumPlus += arr[i];
        sumMin -= arr[i];
    }
    if(sumPlus == num || sumMin == num) return true;
    // let minusPos = [];
    // let tempSum = 0;
    // for(let i =0; i< arr.length; i++) {
    //     minusPos = []
    //     arr.forEach((item, index) => {
    //         if (index == 0) {
    //             minusPos.push(item);
    //         } else {
    //             minusPos.push('-');
    //             minusPos.push(item);
    //         }
    //     })
    //     tempSum = 0;
    //     for(let j = 0; j< minusPos.length; j++){
    //         if(!j){
    //             tempSum = minusPos[0];
    //         }
    //         if(minusPos[j] == '-'){
    //             tempSum -= minusPos[j+1];
    //             j++;
    //         }
    //         if(minusPos[j] == '-'){
    //             tempSum += minusPos[j+1];
    //             j++;
    //         }
    //     }
    // }

    //Тут должна быть рекурсивная функция, которая переберет все возможные варианты расположения + и -
    return false;
}


console.log(plusMinus([1, 3, 4, 6, 8], -2));
console.log(plusMinus([15, 2, 3], 10));
console.log(plusMinus([1, 5, 3, 2, 5], -2));