let arr = ['Яблоко', 'Банан', 'Ананас'];
const map = arr.reduce((sum, currentValue)=>{
    sum.push(currentValue[0]);
    return sum;
}, []);
console.log(map)

const filter = arr.reduce((sum, currentValue)=>{
    currentValue[0].toLowerCase() === 'а' ? sum.push(currentValue) : sum;
    return sum;
}, []);
console.log(filter)

const forEach = arr.reduce((sum, currentValue, index, arr)=>{
    arr[index] = `${index + 1} : ${currentValue}`; // Если нужно менять исходный массив
    sum.push(`${index + 1} : ${currentValue}`);
    return sum;
}, []);
console.log(arr);
console.log(forEach);