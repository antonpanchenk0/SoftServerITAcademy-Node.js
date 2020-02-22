let arrForPop = [1,2,3,4,5,6,7];
let arrForPush = [1,2,3,4,5,6,7];
let arrForShift = [1,2,3,4,5,6,7];
let arrForUnShift = [1,2,3,4,5,6,7];
let arrForConcat = [1,2,3,4,5,6,7];

function myPop(arr) {
    if(!arr.length) return undefined;
    const lastElem = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElem;
}
console.log(myPop(arrForPop));
console.log(arrForPop);

function myPush(arr, ...elements) {
    for(let i = 1; i < arguments.length; i++){
        arr[arr.length] = arguments[i];
    }
    return arr.length;
}
console.log(myPush(arrForPush,1,2,3,4,4,5,6,7));
console.log(arrForPush);

function myShift(arr) {
    if(!arr.length) return undefined;
    const firstElem = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return firstElem;
}
console.log(myShift(arrForShift));
console.log(arrForShift);

function myUnshift(arr, ...elements) {
    const temp = [...arr];
    for(let i = 1; i < arguments.length; i++){
        arr[i - 1] = arguments[i];
    }
    for(let i = 0; i< temp.length; i++){
        arr[arr.length] = temp[i];
    }
    return arr.length;
}
console.log(myUnshift(arrForUnShift, 1,2,3,4,5,6,7,8,9,0));
console.log(arrForUnShift);

function myConcat(arr, ...elements) {
    let newArr = [];
    arr.forEach((item, index)=>{
        newArr[index] = item;
    });
    for(let i = 1; i < arguments.length; i++){
        if(Array.isArray(arguments[i])){
            arguments[i].forEach((item, index)=>{
                newArr[newArr.length] = item;
            })
        } else{
            newArr[newArr.length] = arguments[i];
        }
    }
    return newArr;
}
console.log(myConcat(arrForConcat, 1,arrForConcat,3,5,6,7,8,9,0));
console.log(arrForConcat);