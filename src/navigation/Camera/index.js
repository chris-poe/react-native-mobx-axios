import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { IonIcon } from '../../components/modules/Icons';

import CameraScreen from '../../components/Screens/camera';

const CameraNavigator = createStackNavigator({
  Camera: {
    screen: CameraScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Camera',
      headerTitleStyle: Platform.select({
        android: {
          flex: 1,
          textAlign: 'center',
          paddingRight: 45,
        },
      }),
      headerStyle: {
        paddingHorizontal: 15,
      },
      headerLeft: (
        <IonIcon
          name="ios-arrow-back-outline"
          onPress={() => navigation.goBack(null)}
          size={30}
        />
      ),
    }),
  },
});

export default CameraNavigator;
