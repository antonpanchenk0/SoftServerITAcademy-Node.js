// const arrows = ['⇖', '⇗', '⇘', '⇙'];
//
// function loader(obj) {
//     console.clear();
//     if(obj.counter >= arrows.length){
//         obj.counter = 0;
//     } else{
//        console.log(arrows[obj.counter]);
//        obj.counter++;
//     }
// /*    console.clear();
//     obj.counter = (obj.counter + 1) % arrows.length;
//     console.log(arrows[obj.counter]);*/
// }
// setInterval(loader, 250, {counter : 0});

function loader2(obj) {
    console.clear();
    if(obj.count > obj.length) obj.count = 0;
    let str = '[';
    for(let i = 0; i < obj.count; i++){
        str+='@';
    }
    for(let i = obj.count; i < obj.length; i++){
        str+='_';
    }
    str+=']';
    obj.count++;
    console.log(str);
}
setInterval(loader2,250, {count: 0, length: 10})
