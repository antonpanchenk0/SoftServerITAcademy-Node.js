function rectangleInRectangle(rectangle_1, rectangle_2) {
    if(typeof rectangle_1 != "object" || typeof rectangle_2 != "object") return console.log({status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
    if(rectangle_1['h'] == undefined || rectangle_2['h'] == undefined || rectangle_1['w'] == undefined || rectangle_2['w'] == undefined) return console.log(new Error('Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'));
    if(typeof rectangle_1['h'] != "number" || typeof rectangle_2['h'] != "number" || typeof rectangle_1['w'] != "number" || typeof rectangle_2['w'] != "number") return console.log(new Error('Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'));
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
    if((small.w <= big.w && small.h <= big.h)
        ||
        (small.w > big.w && big.h >= (2*small.w*small.h*big.w + (big.w*big.w - big.h*big.h)*Math.sqrt(big.w*big.w+big.h*big.h-small.w*small.w))/(big.w*big.w+big.h*big.h)))
    {
        return numberOfBig;
    }
    else return 0;
}