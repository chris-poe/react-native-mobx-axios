import React from 'react';
import { Image as RNImage } from 'react-native';

import getImage from './images';

const Image = ({ name, resizeMode, source, ...props }) => (
  <RNImage
    source={name ? getImage(name) : source}
    resizeMode={resizeMode || 'contain'}
    {...props}
  />
);

export default Image;
