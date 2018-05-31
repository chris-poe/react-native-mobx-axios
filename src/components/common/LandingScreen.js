import React from 'react';
import BackgroundImage from './Image/BackgroundImage';
import ActivityIndicator from './Indicators/ActivityIndicator';
import theme from './theme';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
};

export default () => (
  <BackgroundImage name={null} style={styles.container}>
    <ActivityIndicator color={theme.colors.white} style={styles.indicator} />
  </BackgroundImage>
);
