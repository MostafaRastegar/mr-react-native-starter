import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { store, persistor } from '~/store/store';
import defaultTheme from '~/constants/theme';
import FooterNavigator from '~/components/Common/FooterNavigator';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          <FooterNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
