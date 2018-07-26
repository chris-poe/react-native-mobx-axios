import React from 'react';
import { View } from 'react-native';
import { Provider, observer } from 'mobx-react';

import config from './src/config';
import createStore from './src/store';

import Landing from './src/components/screens/Landing';
import RootNavigator from './src/navigation/RootNavigator';

import SafeAreaView from './src/components/modules/Layout/SafeAreaView';

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

export default observer(App);
