import React from 'react';
import TextInput from './TextInput';

export default (PhoneInput = props => (
  <TextInput autoCapitalize="none" keyboardType="phone-pad" {...props} />
));
