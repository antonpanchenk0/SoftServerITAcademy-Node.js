const dom = {
    btn: document.querySelector('#btnAddToDo'),
    inp: document.querySelector('#inpToDo'),
    ul: document.querySelector('#todoList'),
};
document.addEventListener('DOMContentLoaded', ()=>{
    const data = JSON.parse(localStorage.getItem('todo'));
    if(data){
        data.forEach(item=>{
            let node = document.createElement('li');
            node.innerText = item;
            dom.ul.appendChild(node);
        })
    };
})
dom.btn.addEventListener('click', ()=>{
    if(dom.inp.value == '') {alert('Вы ничего не ввели!'); return false;}
    const data = JSON.parse(localStorage.getItem('todo')) || [];
    data.push(dom.inp.value);
    localStorage.setItem('todo', JSON.stringify(data));
    let node = document.createElement('li');
    node.innerText = dom.inp.value;
    dom.ul.appendChild(node);
    dom.inp.value = '';
})