import {sum} from "../app/sum.js";

export function testSum(ass) {
    describe('Проверка функции sum', () => {
        it("Суммирование двух чисел", () => {
            ass.equal(sum(2, 2), 4);
        });
        it("Суммирование трех чисел", () => {
            ass.equal(sum(2, 2, 2), 6);
        });
        it("Суммирование четырех чисел", () => {
            ass.equal(sum(2, 2, 2, 2), 8);
        });
        it("Проверка на string", () => {
            ass.equal(sum(2, 3, 'four'), 5);
        });
        describe('Некорректне аргументы', () => {
            it("Проверка на некорректные аргументы", () => {
                ass.equal(sum(true, 'haha', undefined, 'four', []), 0);
            });
            it("Проверка на некорректные аргументы включая NaN", () => {
                ass.equal(sum(true, 'haha', undefined, 'four', [], NaN), 0);
            });
            it("Проверка на отсутсвие аргуементов", () => {
                ass.deepEqual(sum(), {status: 'failed', reason: 'Arguments is Null'});
            });
        });
    });
}