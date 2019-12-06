import Pokemon from 'pokedex-app/app/reducers/PokemonReducer.js'
import { combineReducers } from 'redux'
import Example from 'pokedex-app/app/reducers/ExampleReducer';
import CreateGenericReducer from 'pokedex-app/app/reducers/CreateGenericReducer.js'

const rootReducer = combineReducers({
    Example,
    GenericExample: CreateGenericReducer('GENERIC_EXAMPLE'),
    Pokemon
});

export default rootReducer;

