export class PokemonCheckerView{
    constructor(cback){
        this.btn = document.querySelector('.btn-check');
        this.input = document.querySelector('.inp-poke');
        this.leftBox = document.querySelector('.left');
        this.rightBox = document.querySelector('.right');
        this.btn.addEventListener('click', cback);
    }
    render(data){
        this.leftBox.innerHTML = data.pokemons.map(p=>{
            `<p>${p}</p>`
        }).join('');
        this.rightBox.innerHTML = data.frameworks.map(f=>{
            `<p>${f}</p>`
        });
    }
}