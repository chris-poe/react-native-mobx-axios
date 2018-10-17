import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.select({ ios: 20, android: 0 });

const debug = {
  borderWidth: 1,
  borderColor: 'red',
};

const device = {
  width,
  height,
};

const variables = {
  STATUSBAR_HEIGHT,
  fontSize: 16,
  borderRadius: 5,
  padding: 5,
};

const colors = {
  red: '#ef551d',
  white: '#fff',
  black: '#000',
  gray: '#929292',
  mediumGray: '#ccc',
  lightGray: '#dfdfdf',
  info: '#417dc1',
};

const theme = {
  device,
  debug,
  variables,
  colors,
};

export { debug, device, variables, colors, theme };
