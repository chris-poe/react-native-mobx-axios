import React from 'react';
import TextInput from './TextInput';

const SecureTextInput = props => (
  <TextInput autoCapitalize="none" secureTextEntry {...props} />
);

export default SecureTextInput;
