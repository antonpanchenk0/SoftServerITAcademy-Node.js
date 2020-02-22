let text = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it? I wanted to feel done with it first?'
decoding = (text) =>{
    if(!text) return '';
    let sentences = text.split(/\. |! |\? /);
    let firstSentence = sentences[0].split(/, |\. | /);
    let answer = ''
    firstSentence.forEach((item,index)=>{
        let temp = item.split('');
        let length = 0;
        temp.forEach(elem => {
            if(elem != '\''){
                length++;
            }
        })
        let word = sentences[index + 1].split(/, |\. | /)[length - 1];
        length = 0;
        answer = answer + word + ' ';
    })
    answer = answer.split('').slice(0, answer.length - 1);
    answer[0] = answer[0].toUpperCase();
    answer.push('\.');
    answer = answer.join('')
    return answer;
}
console.log(decoding(text));
console.log(decoding(''));