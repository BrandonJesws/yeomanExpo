import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'pokedex-app/app/styles';
import {  Fonts, Colors, Metrics, ApplicationStyles } from 'pokedex-app/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
});
