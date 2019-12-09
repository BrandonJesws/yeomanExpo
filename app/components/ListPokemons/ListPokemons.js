import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PokemonCard from 'pokedex-app/app/components/PokemonCard';
import { useDispatch } from "react-redux";
import { setPokemon } from 'pokedex-app/app/actions/PokemonActions';
import styles from './ListPokemonsStyle';

export default function ListPokemons ({data, navigation}) {
	const dispatch = useDispatch();
	return (
		<View style={styles.container}>
			<FlatList 
				data={data}
				renderItem={({item}) => <PokemonCard id={item.id} name={item.name} sprite={item.sprite} onPress={()=> {
						dispatch(setPokemon(item.id));
						navigation.navigate('DetailPokemonScreen', { 
							name: item.name
						})
					}
				}/>}
				keyExtractor={item => item.id}
			/>
		</View>
	);
}


// ListPokemons.propTypes = {
// 	data: PropTypes.array
// }

ListPokemons.defaultProps = {
	// data: []
}







