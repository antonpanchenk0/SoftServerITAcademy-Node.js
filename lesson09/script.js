function loadData(link = './data.json', isJSON = false) {
    //Создаем объект
    const aja = new XMLHttpRequest();
    //Настраиваем получение данных
    aja.onreadystatechange = function(){

        // if(this.readyState == 4 && this.status == 200){
        //     console.log(`ReadyState: ${this.readyState} \nStatus: ${this.status}`, 'background-color: black, color: red;');
        //     console.log(this.responseText);
        // }

        aja.onload = function(){
            if(this.status == 200){
                // showData(this.responseText);
                showData(this.responseText, isJSON);
            }
        };
    };

    //Настройка отправки данных
    aja.open('GET', link);

    //Отправка
    aja.send();
    return 'OK. The message was send';
}

function showData(data, isJSON){
    // if(isJSON){
    //     const phones = JSON.parse(data);
    // }
    // else{
    //     const phones = data.split(/\n/).map(str=>str.split(';'));
    // }

    const phones = isJSON ? JSON.parse(data) : data.split(/\n/).map(str=>str.split(';'));
    console.log(phones);
    console.table(phones)
}
loadData('/lesson09/data.json', true);