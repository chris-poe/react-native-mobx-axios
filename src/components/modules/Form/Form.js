import React from 'react';
import { View } from 'react-native';

export default (Form = ({ padding, style, ...props }) => (
  <View style={[padding && { padding: 15 }, style]} {...props} />
));
