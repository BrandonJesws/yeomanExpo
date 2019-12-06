import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from 'pokedex-app/app/Store.js';
import NavigationService from 'pokedex-app/app/services/NavigationService.js';
import 'pokedex-app/config/ReactotronConfig'

import AppNavigator from './app/Router';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<AppNavigator ref={
						navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
