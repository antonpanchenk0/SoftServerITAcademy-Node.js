import {testCreteCheeseBoard} from "./test.createCheeseBoard.js";

//Настройка работы Моки
mocha.setup('bdd');
//Вместо того чтобы писать chai.assert, буду писать ass
let ass = chai.assert;

//Тесты
testCreteCheeseBoard(ass);

//Запуск тестов
mocha.run();