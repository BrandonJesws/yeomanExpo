import Pokemon from 'pokedex-app/app/reducers/PokemonReducer.js'
import Pokemons from 'pokedex-app/app/reducers/PokemonsReducer.js'
import { combineReducers } from 'redux'
import Example from 'pokedex-app/app/reducers/ExampleReducer';
import CreateGenericReducer from 'pokedex-app/app/reducers/CreateGenericReducer.js'

const rootReducer = combineReducers({
    Example,
    Pokemons,
    Pokemon,
    GenericExample: CreateGenericReducer('GENERIC_EXAMPLE'),
});

export default rootReducer;

