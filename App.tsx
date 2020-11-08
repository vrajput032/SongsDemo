/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Navigator from './src/navigator';
import Store from './src/redux/store';
import { Provider } from 'react-redux';
// declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar barStyle='light-content' />
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <Navigator />
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;
