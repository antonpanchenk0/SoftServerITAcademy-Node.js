document.getElementById('createTableCheese').addEventListener('click', e=>{
    createCheeseBoard(+cheeseWidth.value, +cheeseHeight.value, cheeseChar.value);
});

document.getElementById('analyseCove').addEventListener('click', e=>{
    let number = rectangleInRectangle({h: +heightFirstCove.value, w: +widthFirstCove.value,},{h: +heightSecondCove.value, w: +widthSecondCove.value,});
    document.getElementById('coveNumber').innerText = number;
});

let trArray = [];

document.getElementById('addTriangle').addEventListener('click', e=>{
    let verticals = nameTriangle.value.toLowerCase().split('');
    let obj = {
        vertices: nameTriangle.value,
    }
    obj[verticals[0]] = +firstSideTriangle.value;
    obj[verticals[1]] = +secondSideTriangle.value;
    obj[verticals[2]] = +thirdSideTriangle.value;
    trArray.push(obj);
    document.getElementById('trList').innerHTML += `${nameTriangle.value}, `;
})
document.getElementById('sortTriangle').addEventListener('click', e=>{
    let res = sortTriangle(trArray);
    res.join(', ');
    console.log(res);
    document.getElementById('trListSort').innerHTML = res;
})