import React from 'react';
import { ImageBackground } from 'react-native';

import getImage from './images';

const styles = {
  base: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignSelf: 'stretch',
  },
};

const BackgroundImage = ({ name, source, style, ...props }) => (
  <ImageBackground
    style={[styles.base, style]}
    source={name ? getImage(name) : source}
    resizeMode="cover"
    {...props}
  />
);

export default BackgroundImage;
