import {sortTriangle} from "../app/task3.js";

export function testSortTriangle(ass) {
    describe('Task 3. Testing sortTriangle function.', ()=>{
        it('Function without arguments', ()=>{
            ass.deepEqual(sortTriangle(), {status: 'failed', reason: 'Не достаточное количество аргументов.'});
        });
        it('Function without more than two argument', ()=>{
            ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 5, b: 10, c: 15}], [{vertices: 'GFO', g: 5, f: 10, o: 15}]), ['ABC']);
        });
        describe('Function with incorrect data', ()=>{
            it('Empty array in arguments', ()=>{
                ass.deepEqual(sortTriangle([]), {status: 'failed', reason: 'Аргумент не является массивом либо он пуст.'})
            });
            it('Array with object where vertices is false', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 5, d: 10, c: 15}]), {status: 'failed', reason: 'Некоректно заданы значения вершин треугольник!'});
            });
            it('Array with object where more than 3 vertices', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABCD', a: 5, b: 10, c: 15}]), {status: 'failed', reason: 'В треугольнике больше или меньше чем 3 вершины!'});
            });
            it('Array with object where more than 4 keys', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 5, b: 10, c: 15, d: 50}]), {status: 'failed', reason: 'Некоректно заданы значения вершин треугольник!'});
            });
            it('Array with object where vertices equal null', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 0, d: 10, c: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with object where wrong keys', ()=>{
                ass.deepEqual(sortTriangle([{ver: 'ABC', d: 0, a: 10, c: 15}]), {status: 'failed', reason: 'Не верные ключи объекта. [{vertices: ABC, a: Number, b: Number, c: Number}]'});
            });
            it('Array with 2 triangles where the same vertices', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 5, b: 10, c: 15}, {vertices: 'ABC', a: 5, b: 10, c: 15}]), {status: 'failed', reason: 'В массиве не может быть 2 треугольника с одинаковыми именами.'});
            });
            it('Array with triangle where the same two vertices', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABB', a: 5, b: 10, c: 15}, {vertices: 'ABC', a: 5, b: 10, c: 15}]), {status: 'failed', reason: 'В треугольнике две вершины с одинаковыми именами!'});
            });
            it('Array with triangle where the vertices eq 0', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 0, b: 10, c: 15}, {vertices: 'ABC', a: 5, b: 10, c: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq undefined', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: undefined, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, b: undefined, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, b: 10, c: undefined}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq null', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: null, b: null, c: null}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: null, b: null, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: null, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq string', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 'null', b: 'null', c: 'null'}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 'null', b: 'null', c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 'null', b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq array', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: [1,2,3], b: [1,2,3], c: [1,2,3]}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: [1,2,3], b: [1,2,3], c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: [1,2,3], b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq object', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: {test: 'test'}, b: {test: 'test'}, c: {test: 'test'}}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: {test: 'test'}, b: {test: 'test'}, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: {test: 'test'}, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq boolean true', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: true, b: true, c: true}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: true, b: true, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: true, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
            it('Array with triangle where the vertices eq boolean false', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: false, b: false, c: false}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: false, b: false, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: false, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'});
            });
        })
        describe('Object in argument with negative number', ()=>{
            it('Negative values as value of object keys', ()=>{
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: -10, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), ['ABC', 'DEF']);
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: -10, b: 10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), ['ABC', 'DEF']);
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, b: -10, c: 15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), ['ABC', 'DEF']);
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: 10, b: 10, c: -15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), ['ABC', 'DEF']);
                ass.deepEqual(sortTriangle([{vertices: 'ABC', a: -10, b: -10, c: -15}, {vertices: 'DEF', d: 5, e: 10, f: 15}]), ['ABC', 'DEF']);
            });
        })
    })
}