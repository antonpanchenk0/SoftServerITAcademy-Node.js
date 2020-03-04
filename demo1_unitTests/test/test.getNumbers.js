import {getNumbers} from "../app/task6.js";

export function testGetNumbers(ass) {
    describe('Task 6. Testing getNumbers function', ()=>{
        it('Function without arguments', ()=>{
            ass.deepEqual(getNumbers(), {status: 'failed', reason: "Не верные параметры функции. getNumbers(length: number, pow: number)."});
        });
        it('Function with one argument', ()=>{
            ass.deepEqual(getNumbers(4), {status: 'failed', reason: "Не верные параметры функции. getNumbers(length: number, pow: number)."});
        });
        it('Function with more than two arguments', ()=>{
            ass.equal(getNumbers(4, 16, 22), '4 5 6 7 8');
        });
        it('Function with float values', ()=>{
            ass.deepEqual(getNumbers(4.4, 16.4), {status: 'failed', reason: `Квадрат 16.4, не является квадратом натурального числа.`});
        });
        it('Function with negative values in length argument', ()=>{
            ass.equal(getNumbers(-4, 16), '4 5 6 7 8');
        });
        it('Function with negative values in pow argument', ()=>{
            ass.deepEqual(getNumbers(4, -16), {status: 'failed', reason: 'Не корректные данные. Минимальный кварат не может быть меньше 0.'});
        });
        it('Function with zero values in pow argument', ()=>{
            ass.deepEqual(getNumbers(4, 0), '0 1 2 3 4');
        });
        it('Function with zero values in pow argument', ()=>{
            ass.deepEqual(getNumbers(-4, 16), '4 5 6 7 8');
        });
        describe('Function with incorrect data in arguments', ()=>{
            it('Undefined as function argument', ()=>{
                ass.deepEqual(getNumbers(undefined, 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, undefined), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(undefined, undefined), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('Null as function argument', ()=>{
                ass.deepEqual(getNumbers(null, 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, null), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(null, null), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('String as function argument', ()=>{
                ass.deepEqual(getNumbers('string', 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, 'string'), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers('string', 'string'), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('Array as function argument', ()=>{
                ass.deepEqual(getNumbers([1,2,3], 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, [1,2,3]), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers([1,2,3], [1,2,3]), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('Object as function argument', ()=>{
                ass.deepEqual(getNumbers({test: 'hello'}, 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, {test: 'hello'}), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers({test: 'hello'}, {test: 'hello'}), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('NaN as function argument', ()=>{
                ass.deepEqual(getNumbers(NaN, 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, NaN), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(NaN, NaN), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('Boolean [true] as function argument', ()=>{
                ass.deepEqual(getNumbers(true, 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, true), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(true, true), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
            it('Boolean [false] as function argument', ()=>{
                ass.deepEqual(getNumbers(false, 16), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(4, false), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
                ass.deepEqual(getNumbers(false, false), {status: 'failed', reason: 'Не корректные данные. length: number, pow: number'});
            });
        })
    })
}