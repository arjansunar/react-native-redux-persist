/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Counter from './src/components/Counter';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
