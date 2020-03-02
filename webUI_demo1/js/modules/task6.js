/**
 * Функция которая возвращает строку содержащию числа квадрат которых больше заданого pow.
 * @param length: number - количество чисел
 * @param pow: number - минимальный квадрат
 * @returns {string|{reason: string, status: string}}
 */
export function getNumbers(length, pow) {
    if(!length || !pow) return {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'};
    if(typeof length != "number" || typeof pow != "number") return {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'};
    if(pow < 0) return {status: 'failed', reason: 'Не корректные данные. Минимальный кварат не может быть меньше 0.'};
    let num = Math.sqrt(pow);
    if(!Number.isInteger(num)) return {status: 'failed', reason: `Квадрат ${pow}, не является квадратом натурального числа.`};
    const count = num + Math.abs(length) + 1;
    let res = '';
    for(let i = num + 1; i < count; i++){
        res += `${i} `;
    };
    res = res.substring(0, res.length -1);
    return res;
}
