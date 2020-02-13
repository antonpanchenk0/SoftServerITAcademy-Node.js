function myLastIndexOf(str,searchValue, searchStart) {
    const Length = str.length;
    const Search = searchStart ? searchStart : 0;
    let position = undefined;
    for(let i = Search; i<Length; i++){
        if(str[i] == searchValue)
            position = i;
    }
    return position;
}

function myIncludes(arr, elem) {
    const Length = arr.length;
    for(let i = 0; i< Length; i++){
        if(arr[i] === elem)
            return true;
    }
    return false;
}

function myRepeat(str, count) {
    let newStr = str;
    const COUNTER = Math.floor(count);
    if(COUNTER < 0) return new Error('RangeError');
    if(COUNTER == 0) return str;
    for(let i = 1; i < COUNTER; i++){
        newStr+=str;
    }
    return newStr;
}

function mySubstring(str, startPoint, endPoint) {
    let string = '';
    if(startPoint>endPoint) return new Error('StartPoint bigger than EndPoint');
    if(startPoint < 0 || endPoint < 0) return new Error('Start or EndPoint is negative');
    for(let i = startPoint+1; i <= endPoint+1; i++){
        string+=str[i-1];
    }
    return string;
}

function myConcat() {
    let str = '';
    for(let i = 0; i<arguments.length; i++){
        str+=arguments[i];
    }
    return str;
}

function mySubstr() {

}