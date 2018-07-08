import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const device = {
  width,
  height,
};

const debug = {
  borderWidth: 1,
  borderColor: 'red',
};

const variables = {
  fontSize: 16,
};

const colors = {
  red: '#d85a42',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#fff',
  black: '#000',
  gray: '#929292',
  medGray: '#ccc',
  lightGray: '#dfdfdf',
  info: '#417dc1',
};

const theme = {
  device,
  debug,
  variables,
  colors,
};

export default theme;

