// Action names should be imported from their respective action modules
import {
	GET_POKEMONS_FAILURE,
	GET_POKEMONS_SUCCESS
} from 'pokedex-app/app/actions/PokemonActions';

//Example initial state
const initialState = {
	pokemons: {},
	error: '',
	
};

// Return a new state object with updated attributes
export default function PokemonsReducer (state = initialState, action) {
	switch (action.type) {
		case GET_POKEMONS_SUCCESS:
			return {
				...state,
				pokemons: action.payload
			}
		case GET_POKEMONS_FAILURE:
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
};

