import React from 'react';
import { SafeAreaView } from 'react-native';
import { Constants } from 'expo';
import Container from './Container';

export default ({ ...props }) => {
  const platform = Constants.platform;
  const requireSafeArea =
    (platform.ios && platform.ios.model.toLowerCase() === 'iphone x') || false;
  if (requireSafeArea) {
    return <SafeAreaView style={{ flex: 1 }} {...props} />;
  } else {
    return <Container flex {...props} />;
  }
};
