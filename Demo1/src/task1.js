/**
 * Функция для построения шамотной доски
 * @param height высота доски
 * @param width ширина доски
 * @param char символ для доски
 * @returns {string|{reason: string, status: string}}
 */
export function createCheeseBoard(height, width, char) {
    if(arguments.length != 3) return {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height, width, char)."};
    if(Math.abs(width) > 50 || width == 0 || Math.abs(height) > 50 || height == 0) return {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."};
    if(typeof height != "number" || typeof width != "number" || typeof char != "string") return {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."};
    if(char == '') return {status: "failed", reason: "Аргумент char не может быть пустым"};
    let h = Math.abs(Math.floor(height));
    let w = Math.abs(Math.floor(width));
    let c = char[0];
    let string = '';
    for(let i = 0; i < h; i++){
        for(let j =0; j < w; j++){
            if(i%2) {
                string += j % 2 ? ' ' : c;
            }else{
                string += j % 2 ? c : ' ';
            }
        }
        string += '\n';
    };
    return string;
}