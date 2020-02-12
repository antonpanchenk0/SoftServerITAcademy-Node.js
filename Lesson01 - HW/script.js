toBinary = (number) =>{
    let DEC = +number;
    let BIN = [];
    let bits = Math.ceil(Math.log2(DEC+1));
    for(let i = bits; i >0; i--){
        DEC%2 === 1? BIN.push(1):BIN.push(0);
        DEC = Math.floor(DEC/2);
    }
    BIN.reverse();
    return BIN.join('');
};
console.log(toBinary('4457'));

strSort = (str) =>{
    let strArr = str.split(' ');
    if(strArr.length === 0) return '';
    let objArr = [];
    strArr.forEach(item=>{
        let temp = item.split('').sort();
        objArr[temp[0]] = item;
    });
    return objArr.join(' ')
};

console.log(strSort('is2 Thi1s T4est 3a'));
console.log(strSort('4of Fo1r pe6ople g3ood th5e the2'));