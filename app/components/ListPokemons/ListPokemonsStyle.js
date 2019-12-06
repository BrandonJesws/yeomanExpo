import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'pokedex-app/app/styles';
import { colors, ApplicationStyles } from 'pokedex-app/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...colors,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
});
