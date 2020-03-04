import {rectangleInRectangle} from "../app/task2.js";

export function testRectangleInRectangle(ass) {
    describe('Task 2. Testing rectangleInRectangle function', () => {
        it('Function without arguments', ()=>{
            ass.deepEqual(rectangleInRectangle(), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1, rectangle_2)."});
        });
        it('Function without one argument', ()=>{
            ass.deepEqual(rectangleInRectangle({h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1, rectangle_2)."});
        });
        it('Function without more than two argument', ()=>{
            ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 15, w: 15}, {h: 20, w: 20}), 2);
        });
        describe('Function with incorrect data', ()=>{
            it('String in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle('string', {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, 'string'), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle('string', 'string'), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('Number in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle(5, {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, 5), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle(5, 5), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('Array in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle([1,2,3,4,5], {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, [1,2,3,4,5]), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle([1,2,3,4,5], [1,2,3,4,5]), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('Undefined in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle(undefined, {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, undefined), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle(undefined, undefined), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('Boolean [true] in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle(true, {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, true), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle(true, true), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('Boolean [false] in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle(false, {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, false), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle(false, false), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('Null in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle(null, {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, null), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle(null, null), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
            it('NaN in arguments', ()=>{
                ass.deepEqual(rectangleInRectangle(NaN, {h: 10, w: 10}), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, NaN), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
                ass.deepEqual(rectangleInRectangle(NaN, NaN), {status: 'failed', reason: "Не верные параметры функции. rectangleInRectangle(rectangle_1(type: object), rectangle_2(type: object)"});
            });
        })
        describe('Function with object in arguments with incorrect data', ()=>{
            it('Not enough argument keys', ()=>{
                ass.deepEqual(rectangleInRectangle({h: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                ass.deepEqual(rectangleInRectangle({w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                ass.deepEqual(rectangleInRectangle({}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                ass.deepEqual(rectangleInRectangle({}, {}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
            });
            describe('Object in argument with incorrect data', ()=>{
                it('Undefined in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: undefined, w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: undefined}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: undefined, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: undefined}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: undefined, w: 10}, {h: 10, w: undefined}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: undefined, w: undefined}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: undefined}, {h: undefined, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: undefined, w: undefined}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: undefined, w: undefined}, {h: undefined, w: undefined}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('String in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: 'string', w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 'string'}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 'string', w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: 'string'}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 'string', w: 10}, {h: 10, w: 'string'}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 'string', w: 'string'}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 'string'}, {h: 'string', w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 'string', w: 'string'}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 'string', w: 'string'}, {h: 'string', w: 'string'}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('Array in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: [1,2,3,4,5], w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: [1,2,3,4,5]}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: [1,2,3,4,5], w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: [1,2,3,4,5]}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: [1,2,3,4,5], w: 10}, {h: 10, w: [1,2,3,4,5]}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: [1,2,3,4,5], w: [1,2,3,4,5]}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: [1,2,3,4,5]}, {h: [1,2,3,4,5], w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: [1,2,3,4,5], w: [1,2,3,4,5]}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: [1,2,3,4,5], w: [1,2,3,4,5]}, {h: [1,2,3,4,5], w: [1,2,3,4,5]}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('Object in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: {value: 'test'}, w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: {value: 'test'}}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: {value: 'test'}, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: {value: 'test'}}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: {value: 'test'}, w: 10}, {h: 10, w: {value: 'test'}}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: {value: 'test'}, w: {value: 'test'}}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: {value: 'test'}}, {h: {value: 'test'}, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: {value: 'test'}, w: {value: 'test'}}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: {value: 'test'}, w: {value: 'test'}}, {h: {value: 'test'}, w: {value: 'test'}}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('Null in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: null, w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: null}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: null, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: null}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: null, w: 10}, {h: 10, w: null}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: null, w: null}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: null}, {h: null, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: null, w: null}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: null, w: null}, {h: null, w: null}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('Boolean[true] in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: true, w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: true}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: true, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: true}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: true, w: 10}, {h: 10, w: true}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: true, w: true}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: true}, {h: true, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: true, w: true}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: true, w: true}, {h: true, w: true}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('Boolean[false] in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: false, w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: false}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: false, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: false}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: false, w: 10}, {h: 10, w: false}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: false, w: false}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: true}, {h: false, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: false, w: false}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: false, w: false}, {h: false, w: false}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
                it('NaN in object keys value', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: NaN, w: 10}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: NaN}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: NaN, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 10, w: NaN}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: NaN, w: 10}, {h: 10, w: NaN}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: NaN, w: NaN}, {h: 10, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: NaN}, {h: NaN, w: 10}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: NaN, w: NaN}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                    ass.deepEqual(rectangleInRectangle({h: NaN, w: NaN}, {h: NaN, w: NaN}), {status: "failed", reason: 'Неверные ключи у объекта - параметра функции. obj{ w: Number, h: Number }.'});
                });
            })
            describe('Object in argument with 0 or negative number', ()=>{
                it('0 as value of object keys', ()=>{
                    ass.deepEqual(rectangleInRectangle({h: 0, w: 10}, {h: 15, w: 15}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 0}, {h: 15, w: 15}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                    ass.deepEqual(rectangleInRectangle({h: 0, w: 0}, {h: 15, w: 15}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 0, w: 15}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 15, w: 0}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                    ass.deepEqual(rectangleInRectangle({h: 10, w: 10}, {h: 0, w: 0}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                    ass.deepEqual(rectangleInRectangle({h: 0, w: 0}, {h: 0, w: 0}), {status: 'failed', reason: 'Стороны прямоугольника не могут быть равны нулю'});
                });
                it('Negative values as value of object keys', ()=>{
                    ass.equal(rectangleInRectangle({h: -10, w: 10}, {h: 15, w: 15}), 2);
                    ass.equal(rectangleInRectangle({h: 10, w: -10}, {h: 15, w: 15}), 2);
                    ass.equal(rectangleInRectangle({h: -10, w: -10}, {h: 15, w: 15}), 2);
                    ass.equal(rectangleInRectangle({h: 10, w: 10}, {h: -15, w: 15}), 2);
                    ass.equal(rectangleInRectangle({h: 10, w: 10}, {h: 15, w: -15}), 2);
                    ass.equal(rectangleInRectangle({h: 10, w: 10}, {h: -15, w: -15}), 2);
                    ass.equal(rectangleInRectangle({h: -10, w: -10}, {h: -15, w: -15}), 2);
                });
            })
        })
    })
}