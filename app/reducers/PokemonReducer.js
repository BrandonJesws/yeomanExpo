// Action names should be imported from their respective action modules
import {
	SET_POKEMON
} from 'pokedex-app/app/actions/PokemonActions';

//Example initial state
const initialState = {
	Pokemon: {},
	isLoading: false,
	error: '',
	id: 1
};

// Return a new state object with updated attributes
export default function PokemonReducer (state = initialState, action) {
	switch (action.type) {
		// case GET_POKEMON_BEGIN:
		// 	return {
		// 		...state,
		// 		isLoading: true
		// 	}
		// case  GET_POKEMON_SUCCESS:
		// 	return {
		// 		...state,
		// 		items: action.payload.data.items,
		// 		isLoading: false
		// 	}
		// case GET_POKEMON_FAILURE:
		// 	return {
		// 		...state,
		// 		error: action.payload.error.status,
		// 		isLoading: false
		// 	}
		// case RESET_POKEMON:
		// 	return {
		// 		...initialState
		// 	}
			case SET_POKEMON:
				return {
					...state,
					id: action.payload
				} 
		default:
			return state;
	}
};

