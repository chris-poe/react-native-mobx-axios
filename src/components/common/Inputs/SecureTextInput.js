import React from 'react';
import TextInput from './TextInput';

export default (SecureTextInput = props => (
  <TextInput autoCapitalize="none" secureTextEntry {...props} />
));
