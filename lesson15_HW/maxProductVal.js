function maxVal(num) {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(1);
    }
    let biggest = getBiggest(num, arr, 0);
}
function getBiggest(num, arr, sum){
    const arrLength = arr.length;
    let tempSum = arr.reduce((s, nextVal)=>{
        return s*=nextVal;
    });
    tempSum > sum ? sum = tempSum : false;
    for(let i = arrLength - 1; i >= 0; i--){
        if(arr[0] >= num) break;
        if(arr[i] != arr[i-1] && (i - 1) >= 0 || i == 0) {
            if(i == 0){
                let start = arr[0] + 1;
                if(start == num){
                    return sum;
                }
                arr = [];
                arr.push(start);
                let oneCounter = num - start;
                for(let i =0; i < oneCounter; i++){
                    arr.push(1);
                };
            }
            else{
                arr.pop();
                (i == arrLength - 1 && arrLength != 1) ? arr[1]++ : arr[i]++;
                let checker = arr.reduce((checkSum, nexVal)=>{
                    return checkSum+=nexVal;
                });
                if(checker != num && checker != num - 1){
                    let start = arr[0] + 1;
                    arr = [];
                    arr.push(start);
                    let oneCounter = num - start;
                    for(let i =0; i < oneCounter; i++){
                        arr.push(1);
                    };
                }
            }
            console.log(arr);
            if(arr[0] <= num) {
                getBiggest(num, arr, sum);
            }
            else{
                return sum;
            }
        }
    }
    return sum;
}
maxVal(8)