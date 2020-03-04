import {fibRow} from "../js/modules/task7.js";

export function testFibRow(ass) {
    describe('Task 7. Testing fibRow function', ()=>{
        it('Function without arguments', ()=>{
            ass.deepEqual(fibRow(), {status: 'failed', reason: 'Не корректный аргумент функции. fibRow({min: Number, max: Number} || {length: Number})'});
        });
        it('Function with one correct argument', ()=>{
            ass.deepEqual(fibRow({min: 5, max: 100}), [5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({length: 4}), [1597, 2584, 4181, 6765]);
        });
        it('Function with more than one arguments', ()=>{
            ass.deepEqual(fibRow({min: 5, max: 100}, {min: 5444, max: 5444322}), [5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({length: 4}, {length: 44233}), [1597, 2584, 4181, 6765]);
        });
        it('Function with float values', ()=>{
            ass.deepEqual(fibRow({min: 5.5, max: 100.20}), [5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({length: 4.5}, {length: 44233}), [1597, 2584, 4181, 6765]);
        });
        it('Function with negative values', ()=>{
            ass.deepEqual(fibRow({min: -5, max: 100}), [5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({min: 5, max: -100}), [5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({min: -5, max: -100}), [5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({length: -4}, {length: 44233}), [1597, 2584, 4181, 6765]);
        });
        it('Function with zero values', ()=>{
            ass.deepEqual(fibRow({min: 0, max: 100}), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
            ass.deepEqual(fibRow({min: 0, max: 0}), [0]);
            ass.deepEqual(fibRow({length: 0}), []);
        });
        it('Function without min or max key in object and without length key', ()=>{
            ass.deepEqual(fibRow({min: 0}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            ass.deepEqual(fibRow({max: 0}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
        });
        describe('Function with incorrect data in arguments', ()=>{
            it('Incorrect object as function argument', ()=>{
                ass.deepEqual(fibRow({test: 'hello'}), {status: 'failed', reason: 'Не корректный аргумент функции. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: 50, length: 2}), {status: 'failed', reason: 'Не корректный аргумент функции. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('Undefined as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: undefined, max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: undefined}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: undefined, max: undefined}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: undefined}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('Null as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: null, max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: null}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: null, max: null}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: null}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('String as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: 'string', max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: 'string'}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 'string', max: 'string'}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: 'string'}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('Array as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: [1,2,3], max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: [1,2,3]}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: [1,2,3], max: [1,2,3]}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: [1,2,3]}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('Object as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: {test: 10}, max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: {test: 10}}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: {test: 10}, max: {test: 10}}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: {test: 10}}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('NaN as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: NaN, max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 10, max: NaN}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: NaN, max: NaN}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: NaN}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('Boolean [true] as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: true, max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 0, max: true}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: true, max: true}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: true}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
            it('Boolean [false] as keys value in object - function argument', ()=>{
                ass.deepEqual(fibRow({min: false, max: 50}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: 0, max: false}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({min: false, max: false}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
                ass.deepEqual(fibRow({length: false}), {status: 'failed', reason: 'Не корректный аргумент функции. Не верные ключи объекта. fibRow({min: Number, max: Number} || {length: Number})'});
            });
        })
    })
}