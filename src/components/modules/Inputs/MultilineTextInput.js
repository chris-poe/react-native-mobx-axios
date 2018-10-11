import React from 'react';
import TextInput from './TextInput';

const styles = {
  multiline: {
    height: 50,
  },
};

export default (MultilineTextInput = ({
  style,
  numberOfLines = 3,
  ...props
}) => (
  <TextInput
    style={[styles.multiline, style]}
    numberOfLines={numberOfLines}
    multiline
    {...props}
  />
));
