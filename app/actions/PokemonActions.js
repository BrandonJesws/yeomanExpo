import ApiService from 'pokedex-app/app/services/ApiService';
// Declare action names as constants with uppercase string
// export const GET_POKEMON_BEGIN = 'GET_POKEMON_BEGIN';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';
// export const RESET_POKEMON = 'RESET_POKEMON';
export const SET_POKEMON = 'SET_POKEMON';

// Thunk: this is a special type of action that can dispatch other actions
export function getPokemons(offset, limit) {
	return async dispatch => {
		await ApiService.getPokemons(offset, limit)
			.then(
				result => {
					const pokemons = result.results.map((pokemon) => {
					const urlSplited = pokemon.url.split("/");
					const id = urlSplited[urlSplited.length - 2];
					const sprite = {uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`};
						return {...pokemon, id, sprite }
					})			
					dispatch(getPokemonsSuccess(pokemons));
				},
				error => {
					dispatch(getPokemonsFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

export function getPokemon(id) {
	return async dispatch => {
		await ApiService.getPokemon(id)
			.then(	
				data => {
					const pokemonDetail = {
						id: data.id,
						name: data.name,
						ability: data.abilities[0].ability.name,
						type: data.types[0].type.name,
						speed: data.stats[0].base_stat,
						specialDefense: data.stats[1].base_stat,
						specialAttack: data.stats[2].base_stat,
						defense: data.stats[3].base_stat,
						attack: data.stats[4].base_stat,
						hp: data.stats[5].base_stat,
						sprite: {uri: data.sprites.front_default}
					}
					dispatch(getPokemonSuccess(pokemonDetail));
				},
				error => {
					dispatch(getPokemonFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

// Action: Function that returns an object with action data for reducer
// export const getPokemonBegin = () => ({
// 	type: GET_POKEMON_BEGIN
// });
export const getPokemonsSuccess = data => ({
	type: GET_POKEMONS_SUCCESS,
	payload: { data }
});
export const getPokemonsFailure = error => ({
	type: GET_POKEMONS_FAILURE,
	payload: { error }
});
export const getPokemonSuccess = data => ({
	type: GET_POKEMON_SUCCESS,
	payload: { data }
});
export const getPokemonFailure = error => ({
	type: GET_POKEMON_FAILURE,
	payload: { error }
});
// export const resetPokemon = () => ({
// 	type: RESET_POKEMON
// });
export const setPokemon = id => ({
    type: SET_POKEMON,
    payload: id
});