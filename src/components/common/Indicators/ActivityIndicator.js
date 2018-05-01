import React from 'react';
import { ActivityIndicator } from 'react-native';

export default ({ color, ...props }) => (
	<ActivityIndicator color={color} size={'large'} {...props} />
);
