function quipu(str) {
    const data = str.split('');
    let myRes = toNumber(data);
    let number = myRes.split(/\*|\+|-|\//);
    number.forEach((item, index)=>{
        number[index] = Number(item);
    });
    let result = undefined;
    for(let i = 0 ; i < myRes.length; i++){
        if(myRes[i].match(/\*|\+|-|\//)){
            switch (myRes[i]) {
                case '*':
                    result = number[0]*number[1];
                    break;
                case '/':
                    result = number[0]/number[1];
                    break;
                case '+':
                    result = number[0]+number[1];
                    break;
                case '-':
                    result = number[0]-number[1];
                    break;
                default:
                    break;
            }
        }
    };
    let res = toQuipu(result);
    res = res.substring(0, res.length - 1);
    return res;
}

function toNumber(data){
    let myRes = '';
    function getNumber(arr){
        const arrLength = arr.length;
        for(let i = 0; i < arrLength; i++){
            if(arr[i] != arr[i + 1]){
                if(arr[i] == '@'){
                    myRes += `${i + 1}`;
                    arr.splice(0, i + 1);
                    getNumber(arr, myRes);
                    break;
                }
                if(arr[i] == '~'){
                    if(i >= 1){
                        let tempStr = '0';
                        tempStr = tempStr.repeat(i);
                        myRes += `${tempStr}`;
                        arr.splice(0, i + 1);
                        getNumber(arr, myRes);
                        break;
                    }
                    arr.splice(0, i + 1);
                    continue;
                }
                myRes+= arr[i];
                arr.splice(0, i + 1);
                getNumber(arr, myRes);
                break;
            }
        }
        return true;
    }
    getNumber(data);
    return myRes;
};
function toQuipu(num){
    let number = num.toString();
    const numberLength = number.length;
    let answer = '';
    for(let i =0; i < numberLength; i++){
        if(number[i] == '0'){
            answer+='~'
        };
        switch (number[i]) {

            case '1':
                answer+='@';
                break;
            case '2':
                answer+='@@';
                break;
            case '3':
                answer+='@@@';
                break;
            case '4':
                answer+='@@@@';
                break;
            case '5':
                answer+='@@@@@';
                break;
            case '6':
                answer+='@@@@@@';
                break;
            case '8':
                answer+='@@@@@@@@';
                break;
            case '9':
                answer+='@@@@@@@@@';
                break;
            default:
                break;
        };
        if(number[i] == number[i+1] == '0'){
            answer += '~';
        }
    }
    return answer;
}
quipu('@~@@*@@');
quipu('@~@@+@@~~');
console.log(quipu('@@~@@@@@@@@@+@@@@@~~~'));