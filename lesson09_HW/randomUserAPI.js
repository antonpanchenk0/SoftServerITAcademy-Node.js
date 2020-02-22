function loadUsers(url) {
    const aja = new XMLHttpRequest();

    aja.onload = function() {
        if(this.status == 200){
            const data = JSON.parse(this.responseText);
            getYoungerAndOlderUser(data);
            manAndWomanCounter(data);
            avgAgeWomanAndMan(data);
            getBiggestCity(data);
        }
    }

    aja.open('GET', url);
    aja.send();
    return console.log('OK. Data was load');
}

function getYoungerAndOlderUser(data){
    let _younger = data.results[0];
    let _older = data.results[0]
    data.results.forEach(item=>{
        if(item.dob.age < _younger.dob.age){
            _younger = item;
        }
        if(item.dob.age > _older.dob.age){
            _older = item;
        }
    });
    younger.value = `${_younger.name.first} ${_younger.name.last}, ${_younger.dob.age}`;
    older.value = `${_older.name.first} ${_older.name.last}, ${_older.dob.age}`;
}
function manAndWomanCounter(data) {
    let man = 0;
    let woman = 0;
    data.results.forEach(item=>{
        item.gender == 'male' && man++;
        item.gender == 'female' && woman++;
    });
    manCounter.value = man;
    womenCounter.value = woman;
}
function avgAgeWomanAndMan(data) {
    let ageM = 0;
    let ageW = 0;
    data.results.forEach(item=> {
        item.gender == 'male' ? ageM+=item.dob.age : ageM;
        item.gender == 'female' ? ageW+=item.dob.age : ageW;
    })
    avgManAge.value = (ageM / manCounter.value).toFixed(1);
    avgWomanAge.value = (ageW / womenCounter.value).toFixed(1);
}
function getBiggestCity(data) {
    let cities = {};
    data.results.forEach(item=> {
        cities.hasOwnProperty(item.location.city) ? cities[item.location.city]++ : cities[item.location.city] = 1;
    });
    let biggest = {
        count: 0,
        city: undefined,
    }
    for(let c in cities){
        if(cities[c] > biggest.count){
            biggest.count = cities[c];
            biggest.city = c;
        }
    }
    biggestCity.value = `${biggest.city}, ${biggest.count}`;
}
