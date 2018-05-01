import React from 'react';
import Image from './Image';

const styles = {
	base: {
		flex: 1,
		width: undefined,
		height: undefined,
		alignSelf: 'stretch',
	}
}

const BackgroundImage = ({ style, ...props }) => (
	<Image style={[styles.base, style]} {...props} resizeMode={'cover'} />
);

export default BackgroundImage;
