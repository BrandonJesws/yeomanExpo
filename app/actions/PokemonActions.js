//import ApiService from 'pokedex-app/app/services/ApiService';
// Declare action names as constants with uppercase string
// export const GET_POKEMON_BEGIN = 'GET_POKEMON_BEGIN';
// export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
// export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';
// export const RESET_POKEMON = 'RESET_POKEMON';
export const SET_POKEMON = 'SET_POKEMON';

// Thunk: this is a special type of action that can dispatch other actions
export function getPokemon() {
	return async dispatch => {
		dispatch(getPokemonBegin());
		dispatch(getPokemonSuccess({example: 'example'}));
		// await ApiService.getPokemon()
		// 	.then(
		// 		result => {
		// 			dispatch(getPokemonSuccess(result));
		// 		},
		// 		error => {
		// 			dispatch(getPokemonFailure(error));
		// 			throw ({error: error, message: 'This is a demo error message'});
		// 		}
		// 	)
	};
}

// Action: Function that returns an object with action data for reducer
// export const getPokemonBegin = () => ({
// 	type: GET_POKEMON_BEGIN
// });
// export const getPokemonSuccess = data => ({
// 	type: GET_POKEMON_SUCCESS,
// 	payload: { data }
// });
// export const getPokemonFailure = error => ({
// 	type: GET_POKEMON_FAILURE,
// 	payload: { error }
// });
// export const resetPokemon = () => ({
// 	type: RESET_POKEMON
// });
export const setPokemon = id => ({
    type: SET_POKEMON,
    payload: id
});
