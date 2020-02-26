//Поиск элементов в дом структуре

// document.getElementById('root'); //1 html element
// document.getElementsByClassName('className') //html collection
// document.getElementsByTagName('div') //html collection
// document.getElementsByName('info') //html collection
//
// document.querySelector('#root') //1 element
// document.querySelectorAll('div') //html collection

function showModal(isShow = true) {
    document.querySelector('#modal').style.display = isShow ? 'none' : 'block';
}


let ligth = document.querySelectorAll('.circle');
function switchLight(arr) {
        for(let i = 0; i < arr.length; i++){
        if(arr[i].style.backgroundColor != 'gray'){
            arr[i].style.backgroundColor = 'gray';
            if(i + 1 < arr.length){
                arr[i + 1].style.backgroundColor = arr[i+1].getAttribute('id');
                return true;
            }else{
                arr[0].style.backgroundColor = arr[0].getAttribute('id');
                return true;
            }
        }
    }
}
document.querySelector('#switch').addEventListener('click', e=>switchLight(ligth));
document.querySelector('.positions').addEventListener('click', e=>{
    let _this = e.target;
    console.log(_this);
})