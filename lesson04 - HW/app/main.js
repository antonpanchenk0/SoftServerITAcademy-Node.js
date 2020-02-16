function countColor(carsArr){
    //Выдает в виде массива все цвета всех машин в исходном массиве
    //['БІЛИЙ', "ЧОРНИЙ", "БЛАКИТНИЙ", ...]
    let resArr = [];
    let isFind = false;
    carsArr.forEach(item=>{
        for(let i = 0; i<resArr.length; i++){
            if(resArr[i] == item['COLOR']){
                isFind = true;
                break;
            }
        }
        isFind ? true : resArr.push(item['COLOR']);
        isFind = false;
    })
    return resArr;
}

function maxColor(carsArr){
    //Выдает в виде строки цвет наиболее часто встречаемый в массиве
    //'ЗЕЛЕНИЙ'
    let colorsArr = [];
    let isFind = false;
    carsArr.forEach(item=>{
        for(let i = 0; i<colorsArr.length; i++){
            if(colorsArr[i].color == item['COLOR']){
                isFind = true;
                colorsArr[i].count++;
                break;
            }
        }
        isFind ? true : colorsArr.push({color: item['COLOR'], count: 1});
        isFind = false;
    })
    let colorMax = colorsArr[0];
    colorsArr.forEach((item)=>{
        (colorMax.count > item.count) ? colorMax : colorMax = item;
    })
    return colorMax.color;
}

function countCars(carsArr){
    //Выдает массив объектов с именем ОВД и количеством автомобилей
    // [{OVD: 'Название ОВД', count : количество_машин}, ...]
    let ovdArr = [];
    let isFind = false;
    carsArr.forEach(item=>{
        for(let i = 0; i<ovdArr.length; i++){
            if(ovdArr[i].ovd == item['OVD']){
                isFind = true;
                ovdArr[i].count++;
                break;
            }
        }
        isFind ? ovdArr : ovdArr.push({ovd: item['OVD'], count: 1});
        isFind = false;
    })
    return ovdArr;
}

function oldAndNew(carsArr){
    //Выдает массив объектов с датой и именем авто самого раннего и самого позднего в массиве
    //[{name : 'HONDA (Мопед)', date : '2009-09-18T00:00:00'}, {name : 'ВАЗ - 2105 (Легковий автотранспорт)', date : '2012-11-30T00:00:00'}]
    let older = {name: carsArr[0]['BRAND'], date: carsArr[0]['THEFT_DATA']};
    let younger = {name: carsArr[0]['BRAND'], date: carsArr[0]['THEFT_DATA']};
    carsArr.forEach(item =>{
        if(new Date(older.date) < new Date(item['THEFT_DATA'])){
            older = {name: item['BRAND'], date: item['THEFT_DATA']}
        }
        if(new Date(younger.date) > new Date(item['THEFT_DATA'])){
            younger = {name: item['BRAND'], date: item['THEFT_DATA']}
        }
    })
    return [younger, older];
}

console.log(countColor(cars));
console.log(maxColor(cars));
console.log(countCars(cars));
console.log(oldAndNew(cars));