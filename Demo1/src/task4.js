function checkPolindrome(num) {
    if(isNaN(Number(num))) return console.log(new Error('Аргумент не является числом. checkPolyndrom(Number)'));
    if(num.length < 2) return console.log(new Error('Число не может быть меньше 10.'));
    if(!Number.isInteger(+num)) return console.log(new Error('Число должно быть целым!'));
    let search = finder(num);
    if(search === '') return 'Полиндромы не найдены';
    return search.split('').reverse().join('') + search;
}

//finder function
function finder(num){
    // const numLength = num.length;
    let halfOfPolindrome = '';
    for(let i = 0; i < num.length; i++){
        if(num[i] === num[i + 1]){
            halfOfPolindrome = num[i];
            num = num.replace(num[i] + num[i+1], '');
            halfOfPolindrome += finder(num);
        }
    }
    return halfOfPolindrome;
}
