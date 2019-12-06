import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LoadingStyle';

export default function Loading (props) {
	return (
		<View style={[styles.container, {backgroundColor: '#80b7ce'}]}>
			<View style={styles.container}></View>
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#CB3236" />
			</View>
			<View style={styles.container}></View>
		</View>
	);
}


Loading.propTypes = {
	// data: PropTypes.array
}

Loading.defaultProps = {
	// data: []
}







