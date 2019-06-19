import React from 'react';
import { View, Text } from 'react-native';

import Touchable from './Touchable';
import ActivityIndicator from './Indicators/ActivityIndicator';
import Icon from './Icon';
import { colors, variables } from './theme';

const styles = {
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.mediumGray,
  },
  text: {
    fontSize: variables.fontSize + 2,
    color: colors.gray,
  },
  rounded: {
    borderRadius: 5,
  },
};

export default ({
  text,
  disabled,
  pending,
  rounded,
  children,
  icon,
  style,
  ...props
}) => (
  <Touchable
    style={[rounded && styles.rounded, styles.button, style]}
    disabled={disabled || pending}
    {...props}
  >
    <View>
      {!pending && text && <Text style={styles.text}>{text}</Text>}
      {!pending && children && children}
      {pending && <ActivityIndicator size="small" />}
      {icon && <Icon name={icon} size={32} />}
    </View>
  </Touchable>
);
