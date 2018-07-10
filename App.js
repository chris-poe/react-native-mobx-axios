import React from 'react';
import { View } from 'react-native';
import { Provider, observer } from 'mobx-react';

import config from './src/config';
import createStore from './src/store';

import LandingScreen from './src/components/modules/LandingScreen';

const store = createStore(config);

class App extends React.Component {
  constructor() {
    super();
    store.uiStore.init();
  }

  render() {
    const initStatus = store.uiStore.initStatus;

    if (!initStatus) {
      return null;
    }

    return (
      <Provider store={store}>
        {store.uiStore.initStatus.case({
          pending: () => <LandingScreen />,
          rejected: e => <LandingScreen error={e.message} />,
          fulfilled: () => <View />,
        })}
      </Provider>
    );
  }
}

export default observer(App);
