import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { variables } from '../theme';

const styles = {
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  stretch: {
    flex: 1,
    alignSelf: 'stretch',
  },
  statusBar: {
    paddingTop: variables.STATUSBAR_HEIGHT,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  padding: {
    paddingHorizontal: 10,
    paddingVertical: '2.5%',
  },
};

export default (Container = ({
  flex,
  row,
  stretch,
  statusBar,
  center,
  padding,
  color,
  style,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View
      style={[
        flex && styles.flex,
        row && styles.row,
        stretch && styles.stretch,
        statusBar && styles.statusBar,
        center === true && styles.center,
        center === 'vertical' && styles.centerVertical,
        center === 'horizontal' && styles.centerHorizontal,
        padding === true ? styles.padding : { padding },
        color && { backgroundColor: color },
        style,
      ]}
      {...props}
    />
  </TouchableWithoutFeedback>
));
