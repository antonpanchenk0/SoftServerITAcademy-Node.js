export class PokemonCheckerModel{
    constructor(){
        this.link = 'https://pokeapi.co/api/v2/pokemon/';
        this.data = {
            pokemons: [],
            frameworks: [],
        }
    }

    checkCurrentPokemon(name){
        return fetch(`${this.link}${name}`)
            .then(res=>res.json())
            .then(data=>{
                data ? this.data.pokemons.push(name): this.data.frameworks.push(name);
                return this.data;
            });
    }
}