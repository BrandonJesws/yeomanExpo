import React, { 
	useEffect 
} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import DetailPokemon from 'pokedex-app/app/components/DetailPokemon';
import Loading from 'pokedex-app/app/components/Loading';
import { getPokemon } from 'pokedex-app/app/actions/PokemonActions';
import styles from './DetailPokemonScreenStyle';

export default function DetailPokemonScreen (props) {
	const dispatch = useDispatch();
	const pokemonid = useSelector(state => state.Pokemon.id);
	const pokemonData = useSelector(state => state.Pokemon.pokemon.data);

	useEffect(()=>{
		dispatch(getPokemon(pokemonid));
	}, [pokemonid]);

	return (
        <View style={styles.container}>
            { 
                pokemonData ? <DetailPokemon pokemonData={pokemonData} /> : <Loading /> 
            }
        </View>
	);
}

DetailPokemonScreen.navigationOptions = ({navigation}) => ( 
    {
        title:  navigation.getParam('name'),
        headerStyle: {
            backgroundColor: '#CB3236',
        },
        headerTintColor:'#FFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            textTransform: 'capitalize',
       }
    }
)



