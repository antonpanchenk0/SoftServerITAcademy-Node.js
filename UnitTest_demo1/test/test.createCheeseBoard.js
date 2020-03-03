import {createCheeseBoard} from "../app/task1.js";
export function testCreteCheeseBoard(ass) {
    describe('Task 1. Testing createCheeseBoard function.', ()=>{
        it('String as char argument', ()=>{
            ass.equal(createCheeseBoard(5,5,'myString'), ' m m \nm m m\n m m \nm m m\n m m \n');
        });
        it('Negative argument values', ()=>{
            ass.equal(createCheeseBoard(-5,5,'m'), ' m m \nm m m\n m m \nm m m\n m m \n');
            ass.equal(createCheeseBoard(5,-5,'m'), ' m m \nm m m\n m m \nm m m\n m m \n');
            ass.equal(createCheeseBoard(-5,-5,'m'), ' m m \nm m m\n m m \nm m m\n m m \n');
        });
        it('Zero arguments', ()=>{
            ass.deepEqual(createCheeseBoard(0,5,'m'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
            ass.deepEqual(createCheeseBoard(5,0,'m'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
            ass.deepEqual(createCheeseBoard(0,0,'m'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
        });
        it('Function without arguments', ()=>{
            ass.deepEqual(createCheeseBoard(), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height, width, char)."});
        });
        it('Function without argument char', ()=>{
            ass.deepEqual(createCheeseBoard(5,5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height, width, char)."});
        });
        it('Function with incorrect data', ()=>{
            ass.deepEqual(createCheeseBoard('helloWorld',5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            ass.deepEqual(createCheeseBoard(5,'helloWorld', '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            ass.deepEqual(createCheeseBoard('helloWorld','helloWorld', '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            ass.deepEqual(createCheeseBoard(5,'helloWorld', 5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            ass.deepEqual(createCheeseBoard('helloWorld',5, 5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            ass.deepEqual(createCheeseBoard('helloWorld','helloWorld', 5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
        });
        it('Function with data more than the maximum allowed', ()=>{
            ass.deepEqual(createCheeseBoard(51, 5, '$'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
            ass.deepEqual(createCheeseBoard(5, 51, '$'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
            ass.deepEqual(createCheeseBoard(51, 51, '$'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
        })
    })
}