import React from 'react';
import { TextInput } from 'react-native';
import { variables, colors } from '../theme';

const styles = {
  input: {
    height: 50,
    backgroundColor: colors.white,
    fontSize: variables.fontSize,
    color: colors.black,
    padding: variables.padding,
    borderRadius: variables.borderRadius,
  },
  default: {
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  error: {
    borderWidth: 2,
    borderColor: colors.red,
  },
};

export default ({ error, style, ...props }) => (
  <TextInput
    placeholderTextColor={error && 'rgba(216,90,66,0.5)'}
    style={[error ? styles.error : styles.default, styles.input, style]}
    {...props}
  />
);
