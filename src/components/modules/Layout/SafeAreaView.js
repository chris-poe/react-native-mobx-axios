import React from 'react';
import { SafeAreaView } from 'react-native';
import { Constants } from 'expo';
import Container from './Container';

export default ({ ...props }) => {
  const platform = Constants.platform;
  const requiresSafeArea =
    (platform.ios && platform.ios.model.toLowerCase() === 'iphone x') || false;
  if (requiresSafeArea) {
    return <SafeAreaView style={{ flex: 1 }} {...props} />;
  } else {
    return <Container flex {...props} />;
  }
};
