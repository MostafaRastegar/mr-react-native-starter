import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import tail from 'mr-min-tail-css/react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from '~/store/store';
import defaultTheme from '~/constants/theme';
import Counter from '~/components/Common/screens/Counter';
import { ContainerView } from './styles';

const App = () => (
  <ContainerView>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <Text style={tail.fontBold}>Open up App.js to start working on your app2!</Text>
          <Counter />
          <StatusBar style="auto" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </ContainerView>
);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
