import React from 'react';
import { Text } from 'react-native';
import { colors, variables } from '../theme';

const styles = {
  input: {
    fontSize: variables.fontSize,
    color: colors.gray,
  },
};

export default ({ field, style }) => (
  <Text style={[styles.input, style]}>{field.label || field.name}</Text>
);
