export class PokemonView{
    constructor(cback){
        this.btn = document.querySelector('.btn-poke');
        this.info = document.querySelector('.pokemon-info');
        this.btn.addEventListener('click', cback);
    }

    renderPokemons(arr){
        this.info.innerHTML = arr.map(p => this.getsSinglePokemon(p)).join('');
    }

    /**
     * Return string with html tags of current pokemon
     * @params pokemon object {id, }
     * @returns html string of pokemon
     */
    getsSinglePokemon({photo, name}){
        return `
        <div class="card col-3" style="width: 18rem;">
            <img src="${photo}" class="card-img-top" alt="pokemon">
            <div class="card-body text-center">
                <h5 class="card-title">${name}</h5>
            </div>
        </div>
        `
    }
}