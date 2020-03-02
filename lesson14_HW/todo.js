const dom = {
    btn: document.querySelector('#btnAddToDo'),
    inp: document.querySelector('#inpToDo'),
    ul: document.querySelector('#todoList'),
};
const data = JSON.parse(localStorage.getItem('todo'));
if(data){
    data.reverse();
    data.forEach(item=>{
        const node = document.createElement('li');
        node.innerText = item.value;
        node.setAttribute('data-id', `${item.id}`);
        node.addEventListener('click', e=>switchStatus(e));
        if(item.status){
            node.classList.add('checked');
        }
        dom.ul.appendChild(node);
    })
}
dom.btn.addEventListener('click', function (e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('todo')) || [];
    const node = document.createElement('li');
    node.innerText = dom.inp.value;
    let id = data.length != 0 ? data.length : 0;
    node.setAttribute('data-id', `${id}`);
    node.addEventListener('click', e=>switchStatus(e));
    dom.ul.insertAdjacentElement('afterbegin', node);
    data.push(
        {
            id: id,
            value: dom.inp.value,
            status: false,
        });
    localStorage.setItem('todo', JSON.stringify(data));
    dom.inp.value = '';
});

function switchStatus(e) {
    let _this = e.target;
    _this.classList.add('checked');
    dom.ul.removeChild(_this);
    dom.ul.insertAdjacentElement('beforeend', _this);
    let id = _this.getAttribute('data-id');
    const data = JSON.parse(localStorage.getItem('todo'));
    const dataLength  = data.length;
    for(let i =0; i < dataLength; i++){
        if(data[i].id == Number(id)){
            data.splice(i, 1);
            break;
        }
    }
    data.unshift({
        id: id,
        value: _this.textContent,
        status: true,
    });
    console.log(data)
    localStorage.setItem('todo', JSON.stringify(data));
}