function myLastIndexOf(str,searchValue, searchStart) {
    if(searchValue == undefined) return new Error('Search value is null!');
    const Length = str.length;
    const Search = searchStart ? searchStart : 0;
    let position = -1;
    if(searchStart > str.length) return -1;
    for(let i = Search; i<Length; i++){
        if(str[i] == searchValue)
            position = i;
    }
    return position;
}
console.log('\nMyLastIndexOf:');
console.log(myLastIndexOf('Hello world!', 'o', 5));
console.log(myLastIndexOf('Hello world!', 'l', 5));

function myRepeat(str, count) {
    let newStr = str;
    const COUNTER = Math.floor(count);
    if(COUNTER < 0) return new Error('RangeError');
    if(COUNTER == 0) return '';
    for(let i = 1; i < COUNTER; i++){
        newStr+=str;
    }
    return newStr;
}
console.log('\nMyRepeat:');
console.log(myRepeat('str1', 5));
console.log(myRepeat('str1', 5.5));
console.log(myRepeat('str1', 0));

function mySubstring(str, indexStart, indexEnd) {
    let start = indexStart; let end = indexEnd;
    if(end == undefined) end = str.length;
    if(start <= 0 || start == NaN) start = 0;
    if(end <= 0 || end == NaN) end = 0;
    if(start > str.length) start = str.length;
    if(end > str.length) end = str.length;
    if(start > end) { let temp = end; end = start; start = temp;}
    if(start == end) return '';
    //console.log('Start -', start, 'end -', end)
    let string = '';
    for(let i = start; i < end; i++){
        string += str[i];
    }
    return string;
}
console.log('\nMySubstring:');
console.log(mySubstring('HelloWorld', 3, 6))
console.log(mySubstring('HelloWorld', 6, 3))
console.log(mySubstring('HelloWorld', 0, 6))
console.log(mySubstring('HelloWorld', 0, 15))

function myIncludes(str, searchStr) {
    if(str.indexOf(searchStr) != -1) return true;
    else return false;
}
console.log('\nmyIncludes:');
console.log(myIncludes('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque!', 'amet'));
console.log(myIncludes('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque!', 'world'));

function myConcat() {
    let str = '';
    for(let i = 0; i < arguments.length; i++){
        str+=arguments[i];
    }
    return str;
}
console.log('\nmyConcat:');
console.log(myConcat('Hello', ' world', '!', ' ', 'Lorem', ' ipsum...'));

function mySubstr(str, indexStart, length) {
    if(indexStart > str.length) return '';
    if(indexStart < 0) return new Error('Index start cannot be negative');
    if(indexStart == str.length) return str[str.length-1];
    let _length = length;
    if(length === undefined) _length = str.length;
    let string = '';
    for(let i = indexStart; i < indexStart + _length; i++){
        string += str[i]
    }
    return string;
}
console.log('\nmySubstr')
console.log(mySubstr('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque!', 3));
console.log(mySubstr('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque!', 100));
console.log(mySubstr('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque!', 3, 6));
console.log(mySubstr('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque!', 0, 6));