import React from 'react';
import TextInput from './TextInput';

export default (EmailInput = props => (
  <TextInput autoCapitalize="none" keyboardType="email-address" {...props} />
));
