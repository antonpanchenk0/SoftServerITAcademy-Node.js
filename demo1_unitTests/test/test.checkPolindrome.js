import {checkPolindrome} from "../app/task4.js";

export function testCheckPolindrome(ass) {
    describe('Task 4. Testing testCheckPolindrome function', ()=>{
        it('Function without arguments', ()=>{
            ass.deepEqual(checkPolindrome(), {status: 'failed', reason: 'Не верные аргументы функции. checkPolyndrom(Number)'});
        });
        it('Function with one correct argument', ()=>{
            ass.equal(checkPolindrome(2212345665432147), '123456654321');
        });
        it('Function with more than one argument', ()=>{
            ass.equal(checkPolindrome(2212345665432147, 543432233323), '123456654321');
        });
        it('Function with float in argument', ()=>{
            ass.deepEqual(checkPolindrome(2212345665432147.254), {status: 'failed', reason: 'Число должно быть целым!'});
        });
        it('Function with number less than 10', ()=>{
            ass.deepEqual(checkPolindrome(9), {status: 'failed', reason: 'Число не может быть меньше 10.'});
        });
        it('Function with negative number', ()=>{
            ass.equal(checkPolindrome(2212345665432147), '123456654321');
        });
        it('Function with number where 2 polindroms', ()=>{
            ass.equal(checkPolindrome(21551254212345665432147), '1551');
        });
        it('Function with number where 1 polindrom in start of number', ()=>{
            ass.equal(checkPolindrome(12345665432147), '123456654321');
        });
        it('Function with number where 1 polindrom in end of number', ()=>{
            ass.equal(checkPolindrome(47123456654321), '123456654321');
        });
        it('Function with number where not  polindroms', ()=>{
            ass.equal(checkPolindrome(1234567890), 'Полиндром не найден!');
        });
        describe('Function with incorrect data in funcrion argument', ()=>{
            it('Undefined as argument', ()=>{
                ass.deepEqual(checkPolindrome(undefined), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('String as argument', ()=>{
                ass.deepEqual(checkPolindrome('string'), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('Object as argument', ()=>{
                ass.deepEqual(checkPolindrome({value: 'test'}), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('Array as argument', ()=>{
                ass.deepEqual(checkPolindrome([1,2,3,4]), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('Boolean[true] as argument', ()=>{
                ass.deepEqual(checkPolindrome(true), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('Boolean[false] as argument', ()=>{
                ass.deepEqual(checkPolindrome(false), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('Null as argument', ()=>{
                ass.deepEqual(checkPolindrome(null), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
            it('NaN as argument', ()=>{
                ass.deepEqual(checkPolindrome(NaN), {status: 'failed', reason: 'Аргумент не является числом. checkPolyndrom(Number)'});
            });
        });
    });
}