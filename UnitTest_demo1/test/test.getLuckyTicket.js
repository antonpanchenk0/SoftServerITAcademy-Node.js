import {getLuckyTicket} from "../app/task5.js";

export function testGetLuckyTicket(ass) {
    describe('Task 5. Testing getLuckyTicket function', ()=>{
        it('Function without arguments', ()=>{
            ass.deepEqual(getLuckyTicket(), {status: 'failed', reason: 'Отсутствуют аргументы функции. getLuckyTicket({min: humber, max: number})'});
        });
        it('Function with more than one argument', ()=>{
            ass.deepEqual(getLuckyTicket({min: 566, max: 567}, {winner: 'Hard Count Method', simpleCount: 0, hardCount: 1}));
        })
    });
}