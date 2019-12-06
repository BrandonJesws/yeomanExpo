import axios from 'axios';

export default {
	
	host: 'https://pokeapi.co/api/v2/',
	
	getPokemon(id) {
		const url = `${this.host}pokemon/${id}/`;
		const method = 'GET';
		return this.makeRequest({url, method});
	},

	getPokemons(offset, limit) {
		const url = `${this.host}pokemon?offset=${offset}&limit=${limit}`;
		const method = 'GET';
		return this.makeRequest({url, method});
	},

	getExample(params = {}) {
		const url = `${this.host}`;
		const method = 'GET';
		return this.makeRequest({url, method});
	},
	
	makeQueryParams (params) {
		let queries = '';
		for(var key in params){
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},

	async makeRequest(requestData={}) {
		let res = await axios(requestData);
		return res.data;
	},
};

