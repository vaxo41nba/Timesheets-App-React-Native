import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useFonts } from 'expo-font';

import { reducer } from './src/redux/rootReducer';
import mySaga from './src/redux/sagas';
import Navigator from './src/navigation';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

export default function App() {
  const [loaded] = useFonts({
    MontserratAlternates_Regular: require('./src/assets/fonts/MontserratAlternates_Regular.ttf'),
    MontserratAlternates_Medium: require('./src/assets/fonts/MontserratAlternates_Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const statusBarCond = () => {
    if (Platform.OS === 'android') {
      return <StatusBar backgroundColor='#FF9600' />;
    }
    return <SafeAreaView style={styles.statusBar} />;
  };

  return (
    <Provider store={store}>
      {statusBarCond()}
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  statusBar: {
    flex: 0,
    backgroundColor: '#FF9600',
  },
});
