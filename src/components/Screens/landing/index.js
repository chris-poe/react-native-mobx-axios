import React from 'react';
import BackgroundImage from '../../modules/Image/BackgroundImage';
import ActivityIndicator from '../../modules/Indicators/ActivityIndicator';
import theme from '../../modules/theme';

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
