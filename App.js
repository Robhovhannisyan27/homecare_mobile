/* eslint-disable eqeqeq */
import React from 'react';
import { SafeAreaView, Text, TextInput, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/Navigator';

// const Navigation = () => (

// )

const Content = () =>
  Platform.OS === 'android' ?
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
    :
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  ;

const App = () => {
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
  }
  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
  }
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps.allowFontScaling = false;
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Content />
    </>
  );
};

export default App;
