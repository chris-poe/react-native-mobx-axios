import React from 'react';
import { Header } from 'react-navigation';
import { View } from 'react-native';
import theme from '../theme';

const styles = {
	container: {
		backgroundColor: theme.colors.white,
	}
}

const CustomHeader = ({ headerProps }) => {
	return (
		<View style={styles.container}>
			<Header {...headerProps} />
		</View>
	)
};

export default CustomHeader;
