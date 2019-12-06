import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ListPokemons from 'pokedex-app/app/components/ListPokemons';
import Loading from 'pokedex-app/app/components/Loading';
import Api from 'pokedex-app/app/services/ApiService';

export default function WelcomeScreen(props) {

  const { navigation } = props;
  const [pokemons, setPokemons] = useState(null)
 
  useEffect(() => {
	  //params ( offset, limit)
	  Api.getPokemons(0, 151)
	  	.then(result => {
		const pokemons = result.results.map((pokemon) => {
      	const urlSplited = pokemon.url.split("/");
	    const id = urlSplited[urlSplited.length - 2];
	    const sprite = {uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`};
      	return {...pokemon, id, sprite }
      })
    setPokemons(pokemons)
    })
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
