// Action names should be imported from their respective action modules
import {
	SET_POKEMON,
	GET_POKEMON_FAILURE,
	GET_POKEMON_SUCCESS,
} from 'pokedex-app/app/actions/PokemonActions';

//Example initial state
const initialState = {
	id: 1,
	pokemon: {},
	error: '',
	
};

// Return a new state object with updated attributes
export default function PokemonReducer (state = initialState, action) {
	switch (action.type) {
		case SET_POKEMON:
			return {
				...state,
				id: action.payload
			} 
		case GET_POKEMON_SUCCESS:
				return {
				...state,
				pokemon: action.payload
			}
		case GET_POKEMON_FAILURE:
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
};

