/**
 * Функция опрделяет можно ли вложить один прямоугольник в другой
 * @param rectangle_1: object{h: number, w: number}
 * @param rectangle_2: object{h: number, w: number}
 * @returns {{reason: string, status: string}|number}
 */
export function rectangleInRectangle(rectangle_1, rectangle_2) {
    if(arguments.length < 2) return {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1, rectangle_2)."};
    //Проверка на то, являеется ли переданные параметры объектами
    if(typeof rectangle_1 != "object" || typeof rectangle_2 != "object") return {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"};
    //Проверка все ли данные о конвертах получены (ширина и высота)
    if(rectangle_1['h'] == undefined || rectangle_2['h'] == undefined || rectangle_1['w'] == undefined || rectangle_2['w'] == undefined) return {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'};
    if(isNaN(rectangle_1['h']) || isNaN(rectangle_2['h'])  || isNaN(rectangle_1['w'])  || isNaN(rectangle_2['w']) ) return {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'};
    //Если переданы не числа в качестве параметрой объекта
    if(typeof rectangle_1['h'] != "number" || typeof rectangle_2['h'] != "number" || typeof rectangle_1['w'] != "number" || typeof rectangle_2['w'] != "number") return {status: 'failed', reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'};
    if(rectangle_1['h'] == 0 ||rectangle_2['h'] == 0 || rectangle_1['w'] == 0 || rectangle_2['w'] == 0) return {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'};
    let big = null;
    let small = null;
    let numberOfBig = null;
    if(Math.abs(rectangle_1.h) * Math.abs(rectangle_1.w) == Math.abs(rectangle_2.h) * Math.abs(rectangle_2.w)) return 0;
    if(Math.abs(rectangle_1.h) * Math.abs(rectangle_1.w) > Math.abs(rectangle_2.h) * Math.abs(rectangle_2.w)){
        big = rectangle_1;
        small = rectangle_2;
        numberOfBig = 1;
    } else{
        big = rectangle_2;
        small = rectangle_1;
        numberOfBig = 2;
    };
    /**Условие проверяет по формуле сможет ли меньший конверт вложится в больший под каким-либо уголом
     * Формула для проверки:
     * Small - w: ширина, h: высота
     * Big - w: ширина, h: высота
     * Вложение возможно если:
     * 1)small.w <= big.w и small.h <= big.h
     * или
     * 2)small.w > big.w и big.h >= (2*small.w*small.h + (big.w^2 - big.h^2)*Корень(big.w^2+big.h^2 - small.w^2)) / big.w^2 + big.h^2
     */
    const smallW = Math.abs(small.w);
    const smallH = Math.abs(small.h);
    const bigW = Math.abs(big.w);
    const bigH = Math.abs(big.h);
    if((smallW <= bigW && smallH <= bigH)
        ||
        (smallW > bigW && bigH >= (2*smallW*smallH*bigW + (Math.pow(bigW, 2) - Math.pow(bigH, 2))*Math.sqrt(Math.pow(bigW,2)+Math.pow(bigH,2)-Math.pow(smallW,2)))/(Math.pow(bigW,2)+Math.pow(bigH,2))))
    {
        return numberOfBig;
    }
    else{
        return 0;
    }
}