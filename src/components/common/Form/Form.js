import React from 'react';
import { View } from 'react-native';

export default ({ padding, style, ...props }) => (
  <View
    style={[padding === true ? { padding: 15 } : { padding }, style]}
    {...props}
  />
);
