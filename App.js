import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import tail from 'mr-min-tail-css/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from '~/store/store';
import defaultTheme from '~/constants/theme';

import Home from '~/pages/home';
import Profile from '~/pages/profile';
import { ContainerView } from './styles';

const Stack = createStackNavigator();

const App = () => (
  <ContainerView>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
          </NavigationContainer>
          <View>
            <Text>Open up App.js to start working on your app2!</Text>
          </View>
          <StatusBar style="auto" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ContainerView>
);

export default App;
