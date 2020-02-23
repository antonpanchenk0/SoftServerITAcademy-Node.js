function checkPolindrome(num) {
    if(typeof num == "string") console.log(new Error('Аргумент не является числом. checkPolyndrom(Number)'));
    if(num < 10) console.log(new Error('Число не может быть меньше 10.'));
    if(!Number.isInteger(num)) console.log(new Error('Число должно быть целым!'));
    let numArr = num.toString().split('');

}

console.log(checkPolindrome(1234554311));