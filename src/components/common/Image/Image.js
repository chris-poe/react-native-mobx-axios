import React from 'react';
import { ImageBackground } from 'react-native';

import getImage from './images';

const Image = ({ name, source, ...props }) => (
	<ImageBackground
		source={name ? getImage(name) : source}
		resizeMode={'contain'}
		{...props}
	/>
)

export default Image;
