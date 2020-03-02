/**
 * Функция находи числа Фибоначчи которые подходят под заданные параметры поиска
 * @param obj объект описывающий какие числа Фибоначчи на нужны. {min: Number, max: Number} или {length: Number}. length - длина числа Фибоначчи
 * @returns {Array|{reason: string, status: string}}
 */
export function fibRow(obj) {
    const keys = Object.keys(obj);
    //Если у объета более 2 ключей - ошибка
    if(keys.length > 2) return {status: 'failed', reason: 'Не корректный аргумент функции. fibRow({min: Number, max: Number} || {length: Number})'};
    for(let i = 0; i < keys.length; i++){
        //Если не верные названия у ключей объекта - ошибка
        if(keys[i] != 'max' && keys[i] != 'min' && keys[i] != 'length') return {status: 'failed', reason: 'Не корректный аргумент функции. fibRow({min: Number, max: Number} || {length: Number})'};
        //Если есть min но нет max или наоборот - ошибка
        if((!obj['min'] || !obj['max']) && !obj['length']) return {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'};
        //Если значение объекта не являются числами - ошибка
        if(typeof obj[keys[i]] != 'number') return {status: 'failed', reason: 'Не корректный аргумент функции. fibRow({min: Number, max: Number} || {length: Number})'};
        //Если минимальное значение больше максимального - ошибка
        if(obj['min'] > obj['max']) return {status: 'failed', reason: 'Не корректный аргумент функции. Минимальное значение не может быть больше максимального'};
    }

    /**
     * Рекурсиваня функция для подсчета ряда Фибоначчи
     * @param obj объект описывающий какие числа Фибоначчи на нужны. {min: Number, max: Number} или {length: Number}. length - длина числа Фибоначчи
     * @param fibArr массив с числами
     * @returns {Array}
     */
    function getCount(obj, fibArr) {
        const fibLength = fibArr.length;
        let nextNumber = fibArr[fibLength - 1] + fibArr[fibLength - 2];
        if(nextNumber < Math.abs(obj.max) || nextNumber.toString().length <= Math.abs(obj.length)) {
            fibArr.push(nextNumber);
            getCount(obj, fibArr);
        }
        return fibArr;
    }
    let tempArr = getCount(obj, [0, 1]);
    let resArr = [];
    tempArr.forEach(item=>{
        if(item.toString().length === Math.abs(obj.length)){
            resArr.push(item);
        }
        if(item >= Math.abs(obj.min) && item <= Math.abs(obj.max)){
            resArr.push(item);
        }
    });
    return resArr;
};