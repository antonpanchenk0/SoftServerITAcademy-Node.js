import {multi} from "../app/multi.js";

export function testMulti(ass) {
    describe('Проверка функции multi', ()=>{
        it("Умножение двух чисел", ()=>{
            ass.equal(multi(2,2), 4);
        });
        it("Умножение трех чисел", ()=>{
            ass.equal(multi(2,2,2), 8);
        });
        it("Умножение четырех чисел", ()=>{
            ass.equal(multi(2,2,2,2), 16);
        });
    });
}