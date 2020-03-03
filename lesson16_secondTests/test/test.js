import {testMulti} from "./test_multi.js";
import {testSum} from "./test_sum.js";

//Настройка работы Моки
mocha.setup('bdd');
//Вместо того чтобы писать chai.assert, буду писать ass
let ass = chai.assert;

//Тесты
testSum(ass); //Тестирование функции Sum
testMulti(ass); //Тестирование функции Multi

//Запуск тестов
mocha.run();