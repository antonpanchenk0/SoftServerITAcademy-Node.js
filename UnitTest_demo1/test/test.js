import {testCreteCheeseBoard} from "./test.createCheeseBoard.js";
import {testRectangleInRectangle} from "./test.rectangleInRectangle.js";
import {testSortTriangle} from "./test.sortTriangle.js";
import {testCheckPolindrome} from "./test.checkPolindrome.js";
import {testGetLuckyTicket} from "./test.getLuckyTicket.js";
import {testGetNumbers} from "./test.getNumbers.js";
import {testFibRow} from "./test.fibRow.js";

//Настройка работы Моки
mocha.setup('bdd');
//Вместо того чтобы писать chai.assert, буду писать ass
let ass = chai.assert;

//Тесты
testCreteCheeseBoard(ass);
testRectangleInRectangle(ass);
testSortTriangle(ass);
testCheckPolindrome(ass);
testGetLuckyTicket(ass);
testGetNumbers(ass);
testFibRow(ass);

//Запуск тестов
mocha.run();