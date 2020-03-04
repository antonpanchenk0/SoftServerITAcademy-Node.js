/**
 *Функция принимает массив объектов треугольников и сортирует их по площади,
 * Площадь считается по формуле герона
 * @param arr массив треугольников(obj{vertices: string, verticesName_1: number, verticesName_2: number, verticesName_3: number}
 * @returns {Uint8Array|{reason: string, status: string}}
 */
export function sortTriangle(arr) {
    //Есди нет аргументов в функции
    if(arguments.length < 1) return {status: 'failed', reason: 'Не достаточное количество аргументов.'};
    //Если массив пуст либо мы передали не массив
    if(!arr.length && isNaN(arr) || typeof arr == "string" || !arr.length) return {status: 'failed', reason: 'Аргумент не является массивом либо он пуст.'};

    //Если в массиве 1 треугольник, проверка правильности вершин
    if(arr.length == 1){
        if(!arr[0].vertices) return {status: 'failed', reason: 'Не верные ключи объекта. [{vertices: ABC, a: Number, b: Number, c: Number}]'};
        let verArr = arr[0].vertices.toLowerCase().split('');
        if(verArr.length > 3 || verArr.length < 3) return {status: 'failed', reason: 'В треугольнике больше или меньше чем 3 вершины!'};
        for(let v in arr[0]){
            if(v != 'vertices') {
                if (typeof arr[0][v] != "number" || !arr[0][v]) return {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'};
                if(v != verArr[0] && v != verArr[1] && v != verArr[2]) return {status: 'failed', reason: 'Некоректно заданы значения вершин треугольник!'};
            }
        }
        return [arr[0].vertices];
    }

    //Если в массиве несколько треугольников, проверяем правильность вершин для каждого треугольника
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(!arr[i].vertices) return {status: 'failed', reason: 'Не верные ключи объекта. [{vertices: ABC, a: Number, b: Number, c: Number}]'};
            let verArr = arr[i].vertices.toLowerCase().split('');
            if(verArr.length > 3 || verArr.length < 3) return {status: 'failed', reason: 'В треугольнике больше или меньше чем 3 вершины!'};
            if(verArr[0] == verArr[1] || verArr[1] == verArr[2] || verArr[2] == verArr[0]) return {status: 'failed', reason: 'В треугольнике две вершины с одинаковыми именами!'};
            for(let v in arr[i]){
                if(v != 'vertices') {
                    if (typeof arr[i][v] != "number" || arr[i][v] == 0 || arr[i][v] == undefined) return {status: 'failed', reason: 'Значения верншин должны быть числами и больше 0!'};
                    if(v != verArr[0] && v != verArr[1] && v != verArr[2]) return {status: 'failed', reason: 'Некоректно заданы значения вершин треугольник!'};
                }
            }
            if(arr[i].vertices == arr[j].vertices){
                return {status: 'failed', reason: 'В массиве не может быть 2 треугольника с одинаковыми именами.'};
            }
        }
    }

    //Реализация сортировки массива треугольников

    //Подсчет площади всех треугольников и сохранение их в новый массив
    let squareArr = arr.map(item=>{
        let p = 0;
        let sides = [];
        for(let c in item){
            if(typeof item[c] == "number"){
                sides.push(item[c]);
            }
        };
        p = (sides[0] + sides[1] + sides[2]) / 2;
        return {triangle: item, sq: Math.sqrt(p*(p - sides[0])*(p - sides[1])*(p - sides[2]))}
    });

    //Сортировка треугольников по плащади
    squareArr.sort((a,b)=>{
        if(a.sq > b.sq) return -1;
        if(a.sq < b.sq) return 1;
        return 0;
    });
    let result = squareArr.map(item=>{ return item.triangle.vertices});
    return result;
};