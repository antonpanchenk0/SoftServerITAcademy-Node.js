/**
 * Функция для вычисления самого длинного полиндрома в числе
 * @param str число из которого будем вычислять полиндромы
 * @returns {string|{reason: string, status: string}}
 */
function checkPolindrome(str) {
    if(isNaN(Number(str))) return {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'};
    if(str.length < 2) return {status: 'failed', reason: 'Число не может быть меньше 10.'};
    if(!Number.isInteger(+str)) return {status: 'failed', reason: 'Число должно быть целым!'};
    str = str.toString();
    let res = finder(str);
    res = res.split('$');
    res.pop();
    res.sort((a,b)=>{
        return a.length <= b.length ? 1 : -1;
    });
    return res[0];
}

/**
 * Функция поиска полиндромов
 * Вовзращяет сроку со всеми найдеными полиндромами разделенными $
 * @param str
 * @param res
 * @returns {string}
 */
function finder(str, res = ''){
    let tempPosition = [];
    let findPolindrome = '';
    for(let i =0; i < str.length - 1; i++){
        if(str[i] == str[i+1]){
            for(let j = 0; i-j >= 0 && i+j+1 <= str.length; j++){
                if(str[i-j] == str[i+j+1]){
                    tempPosition = [i-j, i+j+1];
                } else{
                    findPolindrome = str.split('').splice(tempPosition[0], tempPosition[1] - tempPosition[0] + 1).join('');
                    str = str.replace(findPolindrome, '');
                    res += `${findPolindrome}$`;
                    break;
                }
            }
            tempPosition = [];
            findPolindrome = '';
        }
    }
    return res;
}