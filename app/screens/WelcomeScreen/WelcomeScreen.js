import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import ListPokemons from 'pokedex-app/app/components/ListPokemons';
import Loading from 'pokedex-app/app/components/Loading';
import { getPokemons } from 'pokedex-app/app/actions/PokemonActions';

export default function WelcomeScreen(props) {
  const dispatch = useDispatch();
  const { navigation } = props;
  const pokemons = useSelector(state => state.Pokemons.pokemons.data);

  useEffect(() => {
	  //params ( offset, limit)
	  dispatch(getPokemons(0, 151));
  }, [])

    return (
        <View style={styles.container}>
			{
				pokemons ? <ListPokemons data={ pokemons } navigation={navigation}/> : <Loading />
			}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sprite: {
    flex:1,
  }
});
