function checkPolindrome(str) {
    //Если строка содержит буквы, выдаем исключение
    if(isNaN(Number(str))) return console.log(new Error('Аргумент не является числом. checkPolyndrom(Number)'));
    if(str.length < 2) return console.log(new Error('Число не может быть меньше 10.'));
    if(!Number.isInteger(+str)) return console.log(new Error('Число должно быть целым!'));
    let positions = [];
    positions.push(finder(str));
    console.log(positions)
}

function finder(str){
    const strLength = str.length;
    let tempPosition;
    let posittions = []
    for(let i = 0; i < strLength; i++){
        if(str[i]==str[i+1]){
            for(let j = 0;j < strLength; j++){
                if(str[i-j] == str[i+j+1]){
                    tempPosition = [i-j,i+j+1];
                } else{
                    let findStr = str.split('').splice(tempPosition[0], tempPosition[1] - tempPosition[0] + 1).join('');
                    str = str.replace(findStr, '');
                    posittions.push(finder(str));
                }
            }
            return tempPosition;
        }
    }
}

console.log(checkPolindrome('1725445213489980'))