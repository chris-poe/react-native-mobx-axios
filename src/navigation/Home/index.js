import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { IonIcon } from '../../components/modules/Icons';

import HomeScreen from '../../components/screens/Home';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      headerTitleStyle: Platform.select({
        android: {
          flex: 1,
          textAlign: 'center',
        },
      }),
      headerLeft: null,
      headerRight: null,
    },
  },
});

const HomeIcon = {
  tabBarIcon: ({ tintColor }) => (
    <IonIcon name="ios-home-outline" size={40} color={tintColor} />
  ),
};

export { HomeNavigator, HomeIcon };
