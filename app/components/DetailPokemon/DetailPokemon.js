import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './DetailPokemonStyle';

export default function DetailPokemon ({pokemonData}) {
	return (
		<View style={[styles.container, {backgroundColor: '#80b7ce'}]}>
			<View style={styles.container}>
				<Text style={{marginLeft:8, color: "#fa6125", textAlign: "left",  fontWeight: "bold", fontSize: 25}}>id: {pokemonData.id}</Text>
			</View>
			<View style={[styles.row, {flex: 4}]}>
				<View style={styles.container}></View>
				<View style={{flex: 2}}>
					<Image source={pokemonData.sprite} style={{height: 150, width: 150 }}></Image>
				</View>
				<View style={styles.container}></View>
			</View>
			<View style={{flex: 5}}>
				<View style={styles.container }>
					<Text style={[styles.info, styles.bold]}>Type: {pokemonData.type}</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>Ability: {pokemonData.ability}</Text>
				</View>
				<View style={styles.container}>
					<Text style={{marginLeft: 8, color: "#fa6125",  fontWeight: "bold", fontSize: 18}}>STATS:</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>Speed: {pokemonData.speed}</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>Special Defense: {pokemonData.specialDefense}</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>Special Attack: {pokemonData.specialAttack}</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>Defense: {pokemonData.defense}</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>Attack: {pokemonData.attack}</Text>
				</View>
				<View style={styles.container}>
					<Text style={[styles.info, styles.bold]}>HP: {pokemonData.hp}</Text>
				</View>
			</View>
			<View style={{flex: 2}}></View>
		</View>
	);
}


DetailPokemon.propTypes = {
	// data: PropTypes.array
}

DetailPokemon.defaultProps = {
	// data: []
}







