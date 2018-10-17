import React from 'react';
import TextInput from './TextInput';

export default (NumericInput = props => (
  <TextInput keyboardType="numeric" {...props} />
));
