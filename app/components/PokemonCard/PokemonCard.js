import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PokemonCardStyle';
import { Colors } from 'pokedex-app/app/styles/'

export default function PokemonCard ({id, name, sprite, onPress}) {
	return (
		<View style={styles.cardPokemon}>
            <View style={[styles.container, styles.row ]}>
                <View style={styles.container}>
                    <Text style={[Colors.black, styles.bold, {fontSize: 15}]}>#{id} </Text>
                </View>
                <View style={{flex: 2}}>
                <Text style={[Colors.black, styles.bold, styles.capital, {fontSize: 18}]}>{name}</Text>
                </View>
            </View>
            <View style={[styles.row, {flex: 2}]}>
                <View style= {styles.container}>
                    <Image source={sprite} style={[styles.fullHeigth, {width: '60%'}]} />
                </View>
                <View style={{flex: 2}}>
                    <Button
                        title = "Details"
                        onPress = {onPress}
                        color = {Colors.pokemonSecondDark}
                    />
                </View>
            </View >
        </View>
	);
}


PokemonCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	sprite: PropTypes.object,
}

PokemonCard.defaultProps = {
	id: 0,
	name: "name",
	sprite: {},
}

		





