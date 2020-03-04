import {createCheeseBoard} from "../js/modules/task1.js";
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
        it('Function without one argument', ()=>{
            ass.deepEqual(createCheeseBoard(5,5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height, width, char)."});
        });
        describe('Function with incorrect data', ()=>{
            it('String in arguments with and height', ()=>{
                ass.deepEqual(createCheeseBoard('helloWorld',5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,'helloWorld', '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard('helloWorld','helloWorld', '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,'helloWorld', 5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard('helloWorld',5, 5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard('helloWorld','helloWorld', '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Number in argument char', ()=>{
                ass.deepEqual(createCheeseBoard(5,5, 5), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Undefined in arguments', ()=>{
                ass.deepEqual(createCheeseBoard(undefined,5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,undefined, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,5, undefined), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,undefined, undefined), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(undefined,5, undefined), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(undefined,undefined, undefined), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Array in arguments', ()=>{
                ass.deepEqual(createCheeseBoard([1,2,3,4,5],5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,[1,2,3,4,5], '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,5, [1,2,3,4,5]), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,[1,2,3,4,5], [1,2,3,4,5]), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard([1,2,3,4,5],5, [1,2,3,4,5]), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard([1,2,3,4,5],[1,2,3,4,5], [1,2,3,4,5]), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Object in arguments', ()=>{
                ass.deepEqual(createCheeseBoard({value: 'test'},5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,{value: 'test'}, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,5, {value: 'test'}), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,{value: 'test'}, {value: 'test'}), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard({value: 'test'},5, {value: 'test'}), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard({value: 'test'},{value: 'test'}, {value: 'test'}), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Null in arguments', ()=>{
                ass.deepEqual(createCheeseBoard(null,5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,null, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,5, null), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,null, null), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(null,5, null), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(null,null, null), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Boolean [true] in arguments', ()=>{
                ass.deepEqual(createCheeseBoard(true,5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,true, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,5, true), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,true, true), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(true,5, true), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(true,true, true), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });
            it('Boolean [false] in arguments', ()=>{
                ass.deepEqual(createCheeseBoard(false,5, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,false, '$'), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,5, false), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(5,false, false), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(false,5, false), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
                ass.deepEqual(createCheeseBoard(false,false, false), {status: 'failed', reason: "Не верные параметры функции. createCheeseBoard(height(type:Number), width(type:Number), char(type:String))."});
            });

        });
        it('Function with data more than the maximum allowed', ()=>{
            ass.deepEqual(createCheeseBoard(51, 5, '$'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
            ass.deepEqual(createCheeseBoard(5, 51, '$'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
            ass.deepEqual(createCheeseBoard(51, 51, '$'), {status: 'failed', reason: "Ошибка значений высоты и/или ширины. Допустимые значения от 1 до 50 включительно."});
        })
    });
}