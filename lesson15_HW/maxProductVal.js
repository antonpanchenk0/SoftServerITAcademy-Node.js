function maxVal(num) {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(1);
    }
    let biggest = getBiggest(num, arr);
}
// function getBiggest(num, arr, sum = 0){
//     const arrLength = arr.length;
//     let tempSum = arr.reduce((s, nextVal)=>{
//         return s*=nextVal;
//     });
//     tempSum > sum ? sum = tempSum : false;
//     for(let i = arrLength - 1; i >= 0; i--){
//         if(arr[0] >= num) break;
//         if(arr[i] != arr[i-1] && (i - 1) >= 0 || i == 0) {
//             if(i == 0){
//                 let start = arr[0] + 1;
//                 if(start == num){
//                     return sum;
//                 }
//                 arr = [];
//                 arr.push(start);
//                 let oneCounter = num - start;
//                 for(let i =0; i < oneCounter; i++){
//                     arr.push(1);
//                 };
//             }
//             else{
//                 arr.pop();
//                 (i == arrLength - 1 && arrLength != 1) ? arr[1]++ : arr[i]++;
//                 let checker = arr.reduce((checkSum, nexVal)=>{
//                     return checkSum+=nexVal;
//                 });
//                 if(checker != num && checker != num - 1){
//                     let start = arr[0] + 1;
//                     arr = [];
//                     arr.push(start);
//                     let oneCounter = num - start;
//                     for(let i =0; i < oneCounter; i++){
//                         arr.push(1);
//                     };
//                 }
//             }
//             console.log(arr);
//             if(arr[0] <= num) {
//                 getBiggest(num, arr, sum);
//             }
//             else{
//                 return sum;
//             }
//         }
//     }
//     return sum;
// }

//Ломается на 3 3 2
function getBiggest(num, arr, sum = 0){
    let arrLength = arr.length;
    let tempSum = arr.reduce((s, nextVal)=>{
        return s*=nextVal;
    });
    tempSum > sum ? sum = tempSum : false;
    if(arr[0] == num){
        return sum;
    }
    if(arrLength != 1){
        let status = true;
        for(let i = 0; i < arrLength; i++){
            if(arr[i] != arr[i+1] && !isNaN(arr[i+1])){
                status = false;
                break;
            }
        }
        if(status){
            let startElem = arr[0] + 1;
            let difference = num - startElem;
            arr = [];
            arr.push(startElem);
            for(let i =0; i < difference; i++){
                arr.push(1);
            }
            getBiggest(num, arr, sum);
            return sum;
        }
    }
    let checkSum = arr.reduce((sum, next)=>{
        return sum+=next;
    });
    if(checkSum != num){
        let dif = num - checkSum;
        for(let i =0; i < dif; i++){
            arr.push(1);
        }
    }
    arrLength = arr.length;
    for(let i = arrLength-1; i >= 0 ; i--){
        if(arr[i] != arr[i-1] && (i-1) >=0){
            // if(i == arrLength - 1){
            //     arr.pop();
            //     arr[arrLength - i]++;
            // }
            arr[i]++;
            arr.pop();
            getBiggest(num, arr, sum);
            return sum;
        }
        if(i == 0 && arrLength > 1){
            arr.pop();
            arr[i]++;
            getBiggest(num, arr, sum);
            return sum;
        }
    }
}
maxVal(8)