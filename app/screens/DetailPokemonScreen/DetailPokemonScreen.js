import React, { 
	useEffect, 
	useState 
} from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import ApiService from 'pokedex-app/app/services/ApiService';
import DetailPokemon from 'pokedex-app/app/components/DetailPokemon';
import Loading from 'pokedex-app/app/components/Loading';

import styles from './DetailPokemonScreenStyle';

export default function DetailPokemonScreen (props) {

	const pokemonid = useSelector(state => state.Pokemon.id);
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(()=>{
        ApiService.getPokemon(pokemonid)
            .then(data => {
			    const pokemonDetail = {
                    id: data.id,
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
			setPokemonData(pokemonDetail);
	    })
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



