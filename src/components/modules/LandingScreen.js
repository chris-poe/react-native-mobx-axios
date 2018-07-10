import React from 'react';
import BackgroundImage from './Image/BackgroundImage';
import ActivityIndicator from './Indicators/ActivityIndicator';
import theme from './theme';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 45,
  },
};

export default () => (
  <BackgroundImage name="landing" style={styles.container}>
    <ActivityIndicator color={theme.colors.gray} style={styles.indicator} />
  </BackgroundImage>
);
