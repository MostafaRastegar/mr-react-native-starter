import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tail from "mr-min-tail-css/react-native";
import { ContainerView } from "./styles";
import { PersistGate } from "redux-persist/es/integration/react";
import Counter from "~/components/Common/screens/Counter";
import FundList from "~/components/Pages/fund/FundList";
import { store, persistor } from "~/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import defaultTheme from "~/constants/theme";
import { fundList } from "~/mock/fundList";

export default function App() {
  return (
    <ContainerView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>
            <Text style={tail.fontBold}>
              Open up App.js to start working on your app2!
            </Text>
            <Counter />
            <FundList data={fundList} />
            <StatusBar style="auto" />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
