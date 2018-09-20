import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScroll } from '../Layout';

// export default (Form = ({ ...props }) => (
//   <KeyboardAwareScroll keyboardShouldPersistTaps="always" {...props} />
// ));

export default (Form = ({ padding, style, ...props }) => (
  <View style={[padding && { padding: 15 }, style]} {...props} />
));
