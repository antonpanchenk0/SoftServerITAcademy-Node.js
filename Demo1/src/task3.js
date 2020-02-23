function sortTriangle(arr) {
    //Если массив пуст либо мы передали не массив
    if(!arr.length || typeof arr == "string") return console.log(new Error('Аргумент не является массивом либо он пуст.'));

    //Если в массиве 1 треугольник
    if(arr.length == 1){
        let verArr = arr[0].vertices.toLowerCase().split('');
        for(let v in arr[0]){
            if(v != 'vertices') {
                if (typeof arr[0][v] != "number" || arr[0][v] == 0 || arr[0][v] == undefined) return console.log(new Error('Значения верншин должны быть числами и больше 0!'));
                if(v != verArr[0] && v != verArr[1] && v != verArr[2]) return console.log(new Error('Некоректно заданы значения вершин треугольник!'));
            }
        }
        return [arr[0].vertices];
    }

    //Если в массиве несколько треугольников
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let verArr = arr[i].vertices.toLowerCase().split('');
            if(verArr.length > 3 || verArr.length < 3) return console.log(new Error('В треугольнике больше или меньше чем 3 вершины!'));
            if(verArr[0] == verArr[1] || verArr[1] == verArr[2] || verArr[2] == verArr[0]) return console.log(new Error('В треугольнике две вершины с одинаковыми именами!'));
            for(let v in arr[i]){
                if(v != 'vertices') {
                    if (typeof arr[i][v] != "number" || arr[i][v] == 0 || arr[i][v] == undefined) return console.log(new Error('Значения верншин должны быть числами и больше 0!'));
                    if(v != verArr[0] && v != verArr[1] && v != verArr[2]) return console.log(new Error('Некоректно заданы значения вершин треугольник!'));
                }
            }
            if(arr[i].vertices == arr[j].vertices){
                return console.log(new Error('В массиве не может быть 2 треугольника с одинаковыми именами.'));
            }
        }
    }

    //Реализация сортировки
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
    squareArr.sort((a,b)=>{
        if(a.sq > b.sq) return -1;
        if(a.sq < b.sq) return 1;
        return 0;
    });
    return squareArr.map(item=>{ return item.triangle.vertices});
};