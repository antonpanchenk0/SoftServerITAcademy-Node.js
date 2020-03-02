const dom = {
    btn: document.querySelector('#btnAddToDo'),
    inp: document.querySelector('#inpToDo'),
    ul: document.querySelector('#todoList'),
};
(function onLoad(){
    const data = JSON.parse(localStorage.getItem('todo'));
    if(data){
        data.reverse();
        data.forEach(item=>{
            createListNode(item.id, item.value, item.isChecked, 'beforeend');
        })
    }
})();
dom.btn.addEventListener('click', function (e) {
    const data = JSON.parse(localStorage.getItem('todo')) || [];
    let id = data.length != 0 ? data.length : 0;
    createListNode(id, dom.inp.value, false, 'afterbegin');
    data.push(
        {
            id: id,
            value: dom.inp.value,
            isChecked: false,
        });
    localStorage.setItem('todo', JSON.stringify(data));
    dom.inp.value = '';
});

function switchStatus(e) {
    let _this = e.target;
    _this.classList.add('checked');
    dom.ul.removeChild(_this);
    dom.ul.insertAdjacentElement('beforeend', _this);
    let id = _this.dataset.id;
    const data = JSON.parse(localStorage.getItem('todo'));
    const dataLength  = data.length;
    let delData;
    for(let i =0; i < dataLength; i++){
        if(data[i].id == Number(id)){
            delData = data.splice(i, 1);
            break;
        }
    }
    delData[0].isChecked = true;
    data.unshift(delData[0]);
    localStorage.setItem('todo', JSON.stringify(data));
}

function createListNode(id, text, isChecked, appendPosition) {
    const node = document.createElement('li');
    node.innerText = text;
    node.setAttribute('data-id', `${id}`);
    node.addEventListener('click', e=>switchStatus(e));
    if(isChecked){
        node.classList.add('checked');
    }
    dom.ul.insertAdjacentElement(appendPosition, node);
}