import React from 'react';
import { View } from 'react-native';
import { Provider, observer } from 'mobx-react';

import config from './src/config';
import createStore from './src/store';

const store = createStore(config);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View></View>
      </Provider>
    );
  }
}

export default observer(App);
