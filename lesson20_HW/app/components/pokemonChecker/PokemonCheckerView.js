export class PokemonCheckerView{
    constructor(cback){
        this.btn = document.querySelector('.btn-check');
        this.input = document.querySelector('.inp-poke');
        this.leftBox = document.querySelector('div.left');
        this.rightBox = document.querySelector('div.right');
        this.btn.addEventListener('click', cback);
    }
    render(data){
        this.leftBox.innerHTML = data.pokemons.map(p=>{
            return `<p class="font-weight-bold text-capitalize">&bigstar; ${p}</p>`;
        }).join('');
        this.rightBox.innerHTML = data.frameworks.map(f=>{
            return `<p class="font-weight-bold text-capitalize">&bigstar; ${f}</p>`;
        }).join('');
    }
}