nextVersion = (str) => {
    let strArr = str.split('.');
    if(strArr.length != 1){
        strArr.forEach(item => {
            if(item == 9){
                let position = strArr.indexOf(item);
                if(position != 0){
                    strArr[position] = 0;
                    strArr[position-1]++;
                } else{
                    strArr[position] = 0;
                    strArr[0]++;
                }
            }
        })
    } else {
        strArr[0]++;
    }
    return strArr.join('.');
}
console.log(nextVersion('1.1.1'))
console.log(nextVersion('1.1.9'))
console.log(nextVersion('1.9.9'))
console.log(nextVersion('9.9.9'))
console.log(nextVersion('1.2.3'))
console.log(nextVersion('0.9.9'))
console.log(nextVersion('1'))
console.log(nextVersion('1.2.3.4.5.6.7.8'))
console.log(nextVersion('9.9'))
console.log(nextVersion('2'))