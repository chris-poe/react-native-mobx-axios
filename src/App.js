import Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import { Provider, observer } from 'mobx-react';

import config from './config';
import createStore from './store';

import Landing from './components/screens/Landing';
import RootNavigator from './navigation/RootNavigator';

import SafeAreaView from './components/modules/Layout/SafeAreaView';

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
          pending: () => <Landing />,
          rejected: e => <Landing error={e.message} />,
          fulfilled: () => (
            <SafeAreaView>
              <RootNavigator />
            </SafeAreaView>
          ),
        })}
      </Provider>
    );
  }
}

export default Expo.registerRootComponent(observer(App));
