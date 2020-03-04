import {getLuckyTicket} from "../js/modules/task5.js";

export function testGetLuckyTicket(ass) {
    describe('Task 5. Testing getLuckyTicket function', ()=>{
        it('Function without arguments', ()=>{
            ass.deepEqual(getLuckyTicket(), {status: 'failed', reason: 'Отсутствуют аргументы функции. getLuckyTicket({min: humber, max: number})'});
        });
        it('Function with more than one argument', ()=>{
            ass.deepEqual(getLuckyTicket({min: 566, max: 567}, {min: 666, max: 1000}), {winner: 'Draw :)', simpleCount: 0, hardCount: 0});
        });
        it('Function with float value in object', ()=>{
            ass.deepEqual(getLuckyTicket({min: 566.6, max: 567.7}), {winner: 'Draw :)', simpleCount: 0, hardCount: 0});
        });
        it('Function with object where min biggest max', ()=>{
            ass.deepEqual(getLuckyTicket({min: 102, max: 90}), {status: 'failed', reason: 'Ошибка данных. Min значение не может быть больше Max'});
        });
        it('Function with object without min or max', ()=>{
            ass.deepEqual(getLuckyTicket({min: 102}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            ass.deepEqual(getLuckyTicket({max: 102}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
        });
        it('Function with object with null number', ()=>{
            ass.deepEqual(getLuckyTicket({min: 0, max: 0}), {status: 'failed', reason: 'Ошибка данных. Билет не может иметь нулевой номер.'});
        });
        it('Function with object where max eq min', ()=>{
            ass.deepEqual(getLuckyTicket({min: 566, max: 566}), {winner: 'Draw :)', simpleCount: 0, hardCount: 0});
        });
        it('Function with object where ticket number length biggest than six', ()=>{
            ass.deepEqual(getLuckyTicket({min: 5665666, max: 78787878}), {status : 'failed', reason: 'Ошибка данных. Длина номера билета не может быть более чем 6 цифер.'});
        });
        describe('Function with incorrect data in arguments', ()=>{
            it('Undefined as function argument', ()=>{
                ass.deepEqual(getLuckyTicket(undefined), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Number as function argument', ()=>{
                ass.deepEqual(getLuckyTicket(322), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Null as function argument', ()=>{
                ass.deepEqual(getLuckyTicket(null), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('String as function argument', ()=>{
                ass.deepEqual(getLuckyTicket('string'), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Array as function argument', ()=>{
                ass.deepEqual(getLuckyTicket([1,2,3]), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('NaN as function argument', ()=>{
                ass.deepEqual(getLuckyTicket(NaN), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Boolean [true] as function argument', ()=>{
                ass.deepEqual(getLuckyTicket(true), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Boolean [false] as function argument', ()=>{
                ass.deepEqual(getLuckyTicket(false), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
        });
        describe('Function with incorrect data in obj keys', ()=>{
            it('Undefined as keys value', ()=>{
               ass.deepEqual(getLuckyTicket({min: undefined, max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
               ass.deepEqual(getLuckyTicket({min: 888, max: undefined}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
               ass.deepEqual(getLuckyTicket({min: undefined, max: undefined}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Null as keys value', ()=>{
                ass.deepEqual(getLuckyTicket({min: null, max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 888, max: null}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: null, max: null}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('String as keys value', ()=>{
                ass.deepEqual(getLuckyTicket({min: 'string', max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 888, max: 'string'}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 'string', max: 'string'}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Array as keys value', ()=>{
                ass.deepEqual(getLuckyTicket({min: [1,2,3], max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 888, max: [1,2,3]}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: [1,2,3], max: [1,2,3]}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('NaN as keys value', ()=>{
                ass.deepEqual(getLuckyTicket({min: NaN, max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 888, max: NaN}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: NaN, max: NaN}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Boolean [true] as keys value', ()=>{
                ass.deepEqual(getLuckyTicket({min: true, max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 888, max: true}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: true, max: true}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
            it('Boolean [false] as keys value', ()=>{
                ass.deepEqual(getLuckyTicket({min: false, max: 888}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: 888, max: false}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
                ass.deepEqual(getLuckyTicket({min: false, max: false}), {status: 'failed', reason: "Ошибка данных. obj{min:number, max:number}"});
            });
        });
    });
}