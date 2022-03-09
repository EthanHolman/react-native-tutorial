/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavContainer from './src/navigation/AppNavContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import GlobalProvider from './src/context/Provider';
// import AppNavContainer from './src/navigation';

const App = () => {
  return (
    // <GestureHandlerRootView> // leaving this here, because it might be what fixed error and too lazy to rebuild whole app
    // <SafeAreaView>
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
    // </SafeAreaView>
    // </GestureHandlerRootView>
  );
};

export default App;
