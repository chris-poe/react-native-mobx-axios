import React from 'react';
import TextInput from './TextInput';

export default ({ props }) => (
  <TextInput autoCapitalize="none" keyboardType="email-address" {...props} />
);
