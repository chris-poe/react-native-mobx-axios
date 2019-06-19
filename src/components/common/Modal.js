import React from 'react';
import { Modal as RNModal } from 'react-native';

export default ({ animationType, visable, transparent, ...props }) => (
  <RNModal
    animationType={animationType || 'slide'}
    onRequestClose={() => null}
    visable={visable}
    transparent={transparent}
    {...props}
  />
);
