import {PokemonCheckerModel} from "./PokemonCheckerModel.js";
import {PokemonCheckerView} from "./PokemonCheckerView.js";

export class PokemonCheckerController{
    constructor(){
        this.model = new PokemonCheckerModel();
        this.view = new PokemonCheckerView(this.handleClickCheckPokemon.bind(this));
    }

    handleClickCheckPokemon(){
        this.model.checkCurrentPokemon(this.view.input.value).then(data=>this.view.render(data));
    }
}