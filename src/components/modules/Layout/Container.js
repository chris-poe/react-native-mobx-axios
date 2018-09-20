import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const styles = {
  flex: {
    flex: 1,
  },
  stretch: {
    flex: 1,
    alignSelf: 'stretch',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  padding: {
    paddingHorizontal: 10,
    paddingVertical: '2.5%',
  },
};

const Container = ({
  flex,
  stretch,
  center,
  centerHorizontal,
  centerVertical,
  padding,
  color,
  style,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View
      style={[
        flex && styles.flex,
        stretch && styles.stretch,
        center && styles.center,
        centerHorizontal && styles.centerHorizontal,
        centerVertical && styles.centerVertical,
        padding && styles.padding,
        color && { backgroundColor: color },
        style,
      ]}
      {...props}
    />
  </TouchableWithoutFeedback>
);

export default Container;
