function createCheeseBoard(height, width, char) {
    if(arguments.length != 3) return console.log({status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height, width, char)."});
    if(width > 50 || width == 0 || height > 50 || height == 0) return console.log(new Error('Ошибка значений высоты и/или ширены. Допустимые значения от 1 до 50 включительно.'));
    if(typeof height != "number" || typeof width != "number" || typeof char != "string") return console.log({status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
    if(char == '') return console.log(new Error('Аргумент "Символ" не может быть пустым!'));
    let h = Math.abs(Math.floor(height));
    let w = Math.abs(Math.floor(width));
    let c = char[0];
    for(let i = 0; i < h; i++){
        for(let j =0; j < w; j++){
            if(i%2) {
                cheese.innerHTML += j % 2 ? ' ' : c;
            }else{
                cheese.innerHTML += j % 2 ? c : ' ';
            }
        }
        cheese.innerHTML += '\n';
    };
}