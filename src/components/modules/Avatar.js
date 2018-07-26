import React from 'react';
import { View } from 'react-native';
import BackgroundImage from './Image/BackgroundImage';
import withStore from './Helpers/withStore';

import theme from './theme';

const styles = {
  avatar: {
    borderRadius: 25,
    overflow: 'hidden',
  },
};

const Avatar = ({ style, size }) => (
  <View style={[styles.avatar, { height: size, width: size }]}>
    <BackgroundImage name="defaultUser" />
  </View>
);

export default withStore(Avatar);
