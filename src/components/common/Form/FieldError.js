import React from 'react';
import { observer } from 'mobx-react';
import { Text } from 'react-native';
import { colors, variables } from '../theme';

const styles = {
  text: {
    fontSize: variables.fontSize,
    color: colors.red,
  },
};

const FieldError = ({ field, style }) => {
  if (!field.error) return null;

  return <Text style={[styles.text, style]}>{field.error}</Text>;
};

export default observer(FieldError);
