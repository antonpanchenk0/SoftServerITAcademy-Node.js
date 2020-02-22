document.getElementById('createTableCheese').addEventListener('click', e=>{
    createCheeseBoard(+cheeseWidth.value, +cheeseHeight.value, cheeseChar.value);
});

document.getElementById('analyseCove').addEventListener('click', e=>{
    let number = rectangleInRectangle({h: +heightFirstCove.value, w: +widthFirstCove.value,},{h: +heightSecondCove.value, w: +widthSecondCove.value,});
    document.getElementById('coveNumber').innerText = number;
})