//Task 1
document.getElementById('createTableCheese').addEventListener('click', e=>{
    createCheeseBoard(+cheeseWidth.value, +cheeseHeight.value, cheeseChar.value);
});

//Task 2
document.getElementById('analyseCove').addEventListener('click', e=>{
    let number = rectangleInRectangle({h: +heightFirstCove.value, w: +widthFirstCove.value,},{h: +heightSecondCove.value, w: +widthSecondCove.value,});
    document.getElementById('coveNumber').innerText = number;
});

//Task 3
let trArray = [];
let trFlag = false;
document.getElementById('addTriangle').addEventListener('click', e=>{
    let verticals = nameTriangle.value.toLowerCase().split('');
    let obj = {
        vertices: nameTriangle.value,
    }
    obj[verticals[0]] = +firstSideTriangle.value;
    obj[verticals[1]] = +secondSideTriangle.value;
    obj[verticals[2]] = +thirdSideTriangle.value;
    trArray.push(obj);
    if(trFlag) {document.getElementById('trList').innerHTML = '';}
    document.getElementById('trList').innerHTML += `${nameTriangle.value}, `;
});
document.getElementById('sortTriangle').addEventListener('click', e=>{
    let res = sortTriangle(trArray);
    res.join(', ');
    console.log(res);
    document.getElementById('trListSort').innerHTML = res;
    trFlag = true;
});

//Task 4
document.getElementById('checkPolyndrom').addEventListener('click', e=>{
    let result = checkPolindrome(document.getElementById('t4Number').value);
    if(result) {
        document.getElementById('answerPoli').innerHTML = result;
    }
})