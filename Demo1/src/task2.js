/**
 * Функция опрделяет можно ли вложить один прямоугольник в другой
 * @param rectangle_1: object{h: number, w: number}
 * @param rectangle_2: object{h: number, w: number}
 * @returns {{reason: string, status: string}|number}
 */
function rectangleInRectangle(rectangle_1, rectangle_2) {
    //Если передано больше чем 2 аргумента
    if(arguments.length > 2) return {status: 'failed', reason: 'Большое количество аргументов.'};
    //Проверка на то, являеется ли переданные параметры объектами
    if(typeof rectangle_1 != "object" || typeof rectangle_2 != "object") return {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"};
    //Проверка все ли данные о конвертах получены (ширина и высота)
    if(rectangle_1['h'] == undefined || rectangle_2['h'] == undefined || rectangle_1['w'] == undefined || rectangle_2['w'] == undefined) return {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'};
    if(isNaN(rectangle_1['h']) || isNaN(rectangle_2['h'])  || isNaN(rectangle_1['w'])  || isNaN(rectangle_2['w']) ) return {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'};
    //Если переданы не числа в качестве параметрой объекта
    if(typeof rectangle_1['h'] != "number" || typeof rectangle_2['h'] != "number" || typeof rectangle_1['w'] != "number" || typeof rectangle_2['w'] != "number") return {status: 'failed', reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'};
    if(rectangle_1['h'] <= 0 ||rectangle_2['h'] <= 0 || rectangle_1['w'] <= 0 || rectangle_2['w'] <= 0) return {status: 'failed', reason: 'Стороны прямоугольника не могут быть меньше либо равны нулю'};
    let big = null;
    let small = null;
    let numberOfBig = null;
    if(rectangle_1.h * rectangle_1.w == rectangle_2.h * rectangle_2.w) return 0;
    if(rectangle_1.h * rectangle_1.w > rectangle_2.h * rectangle_2.w){
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
    if((small.w <= big.w && small.h <= big.h)
        ||
        (small.w > big.w && big.h >= (2*small.w*small.h*big.w + (Math.pow(big.w, 2) - Math.pow(big.h, 2))*Math.sqrt(Math.pow(big.w,2)+Math.pow(big.h,2)-Math.pow(small.w,2)))/(Math.pow(big.w,2)+Math.pow(big.h,2))))
    {
        return numberOfBig;
    }
    else
        return 0;
}