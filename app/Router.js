// Use this file to create all app navigators.

// import React from 'react'; // ???
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// For each navigator, import its screens. Each screen may be used in many navigators
// To add more screens, run yo rng:g screen <screen-name>

// import ExampleScreen from 'pokedex-app/app/screens/ExampleScreen';
import WelcomeScreen from 'pokedex-app/app/screens/WelcomeScreen';
import DetailPokemonScreen from "pokedex-app/app/screens/DetailPokemonScreen";

// You might want to add some navigator options to your navigator.
// You can edit this options in app/serivices/navigatorOptions.jsx
// import { stackNavigatorOptions } from 'axioma-native/app/services/navigatorOptions';
import { ApplicationStyles } from 'pokedex-app/app/styles';



const AppNavigator = createStackNavigator({
	WelcomeScreen:{
		screen: WelcomeScreen,
		navigationOptions: {
		 title: 'Pokedex App',
		 headerStyle: {
		   backgroundColor: '#CB3236',
		   height: 40,
		 },
		 headerTitleStyle: {
				color: '#FFF', 
			 	fontWeight: 'bold'
		   }
	   },
	 },
	 DetailPokemonScreen:{
		 screen: DetailPokemonScreen,
	 }
}, {
	initialRouteName: 'WelcomeScreen',
	navigationOptions: {
	}
});

export default createAppContainer(AppNavigator);
