import {PokemonModel} from "./PokemonModel.js";
import {PokemonView} from "./PokemonView.js";

export class PokemonController{
    constructor(){
        this.model = new PokemonModel();
        //this.view = new PokemonView(this.handleClickRandomPokemon); //problem with context
        //this.view = new PokemonView(this.handleClickRandomPokemon.bind(this)); //bind context
        //this.view = new PokemonView(()=> this.handleClickRandomPokemon()); //arrow function
        this.view = new PokemonView(this.handleClickRandomPokemon);

    }

    handleClickRandomPokemon = () =>{
        this.model.getRandomPokemon().then(data=> this.view.renderPokemons(data));
    }
}