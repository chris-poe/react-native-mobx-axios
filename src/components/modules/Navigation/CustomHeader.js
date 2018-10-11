import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-navigation';
import { colors } from '../theme';

const styles = {
  container: {
    backgroundColor: colors.white,
  },
};

export default (CustomHeader = ({ headerProps }) => (
  <View style={styles.container}>
    <Header {...headerProps} />
  </View>
));
