let list = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill;Alfred:Tornbull";
meetingSort = (list) =>{
    let res = list.split(';');
    res.forEach((item,index)=>{
         res[index] = item.toUpperCase();
         let temp = res[index].split(':');
         res[index] = temp.reverse().join(', ');
         res[index] = '(' + res[index];
    })
    res = res.sort().join(') ').concat(') ');
    return res;
}
console.log(meetingSort(list));
