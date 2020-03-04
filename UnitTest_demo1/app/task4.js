/**
 * Функция для вычисления самого длинного полиндрома в числе
 * @param str число из которого будем вычислять полиндромы
 * @returns {string|{reason: string, status: string}}
 */
export function checkPolindrome(num) {
    if(!arguments.length) return {status: 'failed', reason: 'Не верные аргументы функции. checkPolyndrom(Number)'};
    if(isNaN(Number(num)) || typeof num != "number") return {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'};
    if(!Number.isInteger(num)) return {status: 'failed', reason: 'Число должно быть целым!'};
    num = Math.abs(num);
    num = num.toString();
    if(num.length < 2) return {status: 'failed', reason: 'Число не может быть меньше 10.'};
    let res = finder(num);
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
 * @param num
 * @param res
 * @returns {string}
 */
function finder(num, res = ''){
    let tempPosition = [];
    let findPolindrome = '';
    for(let i =0; i < num.length - 1; i++){
        if(num[i] == num[i+1]){
            for(let j = 0; i-j >= 0 && i+j+1 <= num.length; j++){
                if(num[i-j] == num[i+j+1]){
                    tempPosition = [i-j, i+j+1];
                } else{
                    findPolindrome = num.split('').splice(tempPosition[0], tempPosition[1] - tempPosition[0] + 1).join('');
                    num = num.replace(findPolindrome, '');
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