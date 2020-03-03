import {testCreteCheeseBoard} from "./test.createCheeseBoard.js";
import {testRectangleInRectangle} from "./test.rectangleInRectangle.js";
import {testSortTriangle} from "./test.sortTriangle.js";

//Настройка работы Моки
mocha.setup('bdd');
//Вместо того чтобы писать chai.assert, буду писать ass
let ass = chai.assert;

//Тесты
testCreteCheeseBoard(ass);
testRectangleInRectangle(ass);
testSortTriangle(ass);

//Запуск тестов
mocha.run();